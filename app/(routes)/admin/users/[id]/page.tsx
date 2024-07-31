import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import UserDetailsSection from "./UserDetailsSection";

type Params = {
    id: string;
};

const PAGE_TITLE = "User Details";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const UserPage = ({ params }: { params: Params }) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <UserDetailsSection userId={params.id} />
                </div>
            </div>
        </div>
    );
};

export default UserPage;
