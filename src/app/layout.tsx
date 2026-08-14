import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { cormorant, garamond, gilda, libre } from "@/app/fonts";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Matthew Cha Photography",
  },
  description: SITE_DESCRIPTION,
  creator: "Matthew Cha",
  publisher: "Matthew Cha Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Matthew Cha Photography",
    title: SITE_TITLE,
    description:
      "Timeless, candid wedding photography for couples in Orange County and Southern California.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Timeless, candid wedding photography for couples in Orange County and Southern California.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${gilda.variable} ${garamond.variable} ${libre.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-3 focus:py-2 focus:font-libre focus:text-xs focus:tracking-wide focus:uppercase"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
