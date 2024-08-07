import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/app/(private)/_ui/styles/globals.scss";
import ProtectedRoute from "@/app/(private)/_components/Others/ProtectedRoute";
import MainTheme from "@/app/(private)/_themes/MainTheme/MainTheme";
import Sidebar from "@/app/(private)/_components/Sidebars/AdminSidebar";
import Header from "@/app/(private)/_components/Headers/AdminHeader";
import AdminNavigation from "@/app/(private)/_components/Headers/AdminNavigation.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Storify",
        default: "Admin | Storify",
    },
    description: "Your new online shopping experience by Storify",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`${inter.className} non-scrollable`}>
                <ProtectedRoute>
                    <MainTheme>
                        <AdminNavigation />
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
                </ProtectedRoute>
            </body>
        </html>
    );
};

export default AdminLayout;
