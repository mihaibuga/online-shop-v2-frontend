import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import CreateUserForm from "@/app/(private)/_components/Forms/Auth/CreateUserForm";

type Props = {};

const PAGE_TITLE = "Add New User";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const NewUserPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <div className="mb-4">
                <p>Create a brand new user and add them to this site.</p>
            </div>

            <div className="max-w-full sm:max-w-sm space-y-2 md:space-y-4">
                <CreateUserForm />
            </div>
        </div>
    );
};

export default NewUserPage;
