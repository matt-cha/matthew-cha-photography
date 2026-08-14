import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { PACKAGES_AUTH_COOKIE } from "@/lib/packagesAuth";

const unauthorized = () =>
  NextResponse.json({ error: "Invalid password" }, { status: 401 });

const passwordsMatch = (received: string, expected: string) => {
  const receivedBuffer = Buffer.from(received);
  const expectedBuffer = Buffer.from(expected);

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(receivedBuffer, expectedBuffer);
};

export async function POST(request: NextRequest) {
  const token = process.env.PACKAGES_AUTH_TOKEN;
  const expectedPassword = process.env.PACKAGES_PASSWORD;

  if (!token || !expectedPassword) {
    return unauthorized();
  }

  let password = "";
  try {
    const body = await request.json();
    if (body && typeof body.password === "string") {
      password = body.password;
    }
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!password || !passwordsMatch(password, expectedPassword)) {
    return unauthorized();
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(PACKAGES_AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/packages",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
