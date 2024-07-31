"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { URL_PATHS } from "@/app/(private)/_config/constants";
import { useStoredUser } from "@/app/(private)//_hooks/useStoredUser";

type PrivateRouteProps = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter();
    const loggedInUser = useStoredUser();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(false);
    
        if (!loggedInUser && isLoading === false) {
            router.push(URL_PATHS.LOGIN.path);
        }
    }, [router, loggedInUser, isLoading]);

    if (!loggedInUser && isLoading === false) {
        return (
            <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8 ">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-3xl font-medium text-center">You are not authorized</h1>
                    <p className="text-xl text-center ">
                        You tried to access a page you did not have prior authorization for.
                    </p>

                    <hr className="mb-4" />

                    <p className="text-lg text-center ">Maybe you want to go to the login page first?</p>
                    <Link href={URL_PATHS.LOGIN.path} className="text-blue-700">
                        <span className="">Click here</span>
                    </Link>
                </div>
            </div>
        );
    }

    if (loggedInUser && isLoading === false) {
        return children;
    }

    return "Loading...";
};

export default ProtectedRoute;
