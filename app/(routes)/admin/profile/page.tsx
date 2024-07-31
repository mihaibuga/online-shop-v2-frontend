import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import UpdateProfileForm from "@/app/(private)/_components/Forms/UpdateProfileForm";

type Props = {};

const PAGE_TITLE = "Profile";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const ProfilePage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <UpdateProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage;
