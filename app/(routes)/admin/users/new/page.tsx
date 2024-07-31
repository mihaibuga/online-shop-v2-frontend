import React from "react";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import CreateUserForm from "@/app/(private)/_components/Forms/Auth/CreateUserForm";

type Props = {};

const NewUserPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Add New User"} />
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
