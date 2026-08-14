import { NextRequest, NextResponse } from "next/server";
import { PACKAGES_AUTH_COOKIE } from "@/lib/packagesAuth";

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/packages")) {
    return NextResponse.next();
  }

  if (pathname === "/packages/login") {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get(PACKAGES_AUTH_COOKIE)?.value;
  const token = process.env.PACKAGES_AUTH_TOKEN;

  if (token && authCookie === token) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/packages/login";
  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ["/packages/:path*"],
};
