import React from "react";
import { Metadata } from "next";

import UsersTable from "@/app/(private)/_components/Tables/UsersTable";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Users";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const UsersPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <UsersTable />
        </div>
    );
};

export default UsersPage;
