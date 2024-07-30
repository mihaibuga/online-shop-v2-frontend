import React from "react";

import CreateUserForm from "@/app/(private)/_components/Forms/Auth/CreateUserForm";

type Props = {};

const NewUserPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Add New User
            </h2>
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
