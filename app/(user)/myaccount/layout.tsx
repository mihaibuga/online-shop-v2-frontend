import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_ui/styles/globals.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClientId } from "../../_utils/env";

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
                    <body>{children}</body>
                </GoogleOAuthProvider>
            ) : (
                <body className={inter.className}>{children}</body>
            )}
        </html>
    );
};

export default AuthLayout;
