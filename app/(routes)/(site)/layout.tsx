import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import "@/app/(private)/_ui/styles/globals.scss";
import MainTheme from "@/app/(private)/_themes/MainTheme/MainTheme";

import AdminNavigation from "@/app/(private)/_components/Headers/AdminNavigation.tsx";
import Navbar from "@/app/(private)/_components/Headers/SiteHeader";
import Sidebar from "@/app/(private)/_components/Sidebars/SiteSidebar";

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
            <body className={`${inter.className} non-scrollable`}>
                <MainTheme>
                <AdminNavigation />
                    <Navbar />
                    <div className="h-full block xl:flex duration-100 relative">
                        <Sidebar />
                        <main className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-72px)] w-full bg-[#EEEEEE] dark:bg-[#222831] text-[#222831] dark:text-[#EEEEEE]">
                            {children}
                        </main>
                    </div>
                    <ToastContainer />
                </MainTheme>
            </body>
        </html>
    );
};

export default SiteLayout;
