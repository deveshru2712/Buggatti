import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "A Clone of Bugatti Official Website",
  description: "This is a clone of the official website of Bugatti.",
};

const Bugatti_Display = localFont({
  src: [{ path: "../public/fonts/BUGATTIDisplay-Regular.woff2" }],
});

const Buggatti_monospace = localFont({
  src: [{ path: "../public/fonts/BUGATTIMonospace-Regular.woff2" }],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={` ${Bugatti_Display} ${Buggatti_monospace} antialiased overflow-x-hidden`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
