import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "../../_ui/styles/globals.scss";
import MainTheme from "../../_themes/MainTheme/MainTheme";
import Sidebar from "@/app/_components/(admin)/Sidebar";
import Header from "@/app/_components/(admin)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin  | Storify",
    description: "Your new online shopping experience by Storify",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`${inter.className} non-scrollable`}>
                <MainTheme>
                    <div className="flex h-screen overflow-hidden bg-[#EEEEEE] dark:bg-[#222831]">
                        <Sidebar />

                        <div className="non-scrollable relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                            <Header />

                            <main className="min-h-[calc(100vh-182px)] md:min-h-[calc(100vh-72px)] w-full text-[#222831] dark:text-[#EEEEEE]">
                                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
                            </main>
                        </div>
                    </div>
                    <ToastContainer />
                </MainTheme>
            </body>
        </html>
    );
};

export default AdminLayout;
