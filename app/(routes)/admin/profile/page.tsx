"use client";

import React from "react";
import UpdateProfileForm from "@/app/(private)/_components/Forms/UpdateProfileForm";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const ProfilePage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Profile"} />
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <UpdateProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage;
