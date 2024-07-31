"use client";

import React from "react";
import UpdateProfileForm from "@/app/(private)/_components/Forms/UpdateProfileForm";

type Props = {};

const ProfilePage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Profile
            </h2>
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <UpdateProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage;
