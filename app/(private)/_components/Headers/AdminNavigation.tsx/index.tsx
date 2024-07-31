"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { URL_PATHS } from "@/app/(private)/_config/constants";

type Props = {};

const AdminNavigation = (props: Props) => {
    const loggedInUser = useStoredUser();
    const pathname = usePathname();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAdminDashboard, setIsAdminDashboard] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(false);
        setIsAdminDashboard(pathname.startsWith("/admin"));
    }, [pathname, loggedInUser, isLoading]);

    if (loggedInUser && isLoading === false) {
        return (
            <Suspense fallback={<p>Loading Admin Navigation...</p>}>
                <header className="antialiased">
                    <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
                        <div className="flex justify-start items-center">
                            <Link
                                href={isAdminDashboard ? URL_PATHS.HOME.path : URL_PATHS.ADMIN.path}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Go to {isAdminDashboard ? "site" : "Admin Dashboard"}
                            </Link>
                        </div>
                    </nav>
                </header>
            </Suspense>
        );
    }
};

export default AdminNavigation;
