import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/app/(private)/_ui/styles/globals.scss";
import { googleClientId } from "@/app/(private)/_config/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Storify",
    description: "Your new online shopping experience by Storify",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            {googleClientId ? (
                <GoogleOAuthProvider clientId={googleClientId}>
                    <body>
                        {children}
                        <ToastContainer />
                    </body>
                </GoogleOAuthProvider>
            ) : (
                <body className={inter.className}>
                    {children}
                    <ToastContainer />
                </body>
            )}
        </html>
    );
};

export default AuthLayout;
