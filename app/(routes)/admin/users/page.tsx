"use client";

import React from "react";

import UsersTable from "@/app/(private)/_components/Tables/UsersTable";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const UsersPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Users"} />
            <UsersTable />
        </div>
    );
};

export default UsersPage;
