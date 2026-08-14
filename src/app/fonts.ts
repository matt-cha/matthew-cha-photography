import localFont from "next/font/local";

export const gilda = localFont({
  src: "../fonts/GildaDisplay-Regular.ttf",
  variable: "--font-gilda-display",
  display: "swap",
});

export const garamond = localFont({
  src: "../fonts/Garamond-Premier-Pro-Display.otf",
  variable: "--font-garamond-premier",
  display: "swap",
});

export const libre = localFont({
  src: "../fonts/LibreFranklin-VariableFont_wght.ttf",
  variable: "--font-libre-franklin",
  display: "swap",
  weight: "100 900",
});

export const cormorant = localFont({
  src: "../fonts/CormorantGaramond-VariableFont_wght.ttf",
  variable: "--font-cormorant-garamond",
  display: "swap",
  weight: "100 900",
});
