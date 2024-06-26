import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_ui/styles/globals.scss";
import MainTheme from "../_themes/MainTheme/MainTheme";
import Navbar from "../_components/Navbar/Navbar";
import Sidebar from "../_components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Storify",
    description: "Your new online shopping experience by Storify",
};

const SiteLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <MainTheme>
                    <Navbar />
                    <div className="h-full block xl:flex duration-100 relative">
                        <Sidebar />
                        <main className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-72px)] w-full bg-[#EEEEEE] dark:bg-[#222831] text-[#222831] dark:text-[#EEEEEE]">{children}</main>
                    </div>
                </MainTheme>
            </body>
        </html>
    );
};

export default SiteLayout;
