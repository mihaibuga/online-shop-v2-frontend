import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_ui/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Storify",
    description: "Your new online shopping experience by Storify",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
