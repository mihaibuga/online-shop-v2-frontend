import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_ui/styles/globals.scss";
import MainTheme from "../_themes/MainTheme/MainTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online shop",
  description: "Designed by MB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EEEEEE] dark:bg-[#222831] text-[#222831] dark:text-[#EEEEEE]`}>
        <MainTheme>{children}</MainTheme>
      </body>
    </html>
  );
}
