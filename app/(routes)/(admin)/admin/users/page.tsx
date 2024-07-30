"use client";

import React from "react";

import UsersTable from "@/app/(private)/_components/(admin)/UsersTable/UsersTable";

type Props = {};

const UsersPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Users
            </h2>

            <UsersTable />
        </div>
    );
};

export default UsersPage;
