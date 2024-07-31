"use client";

import React from "react";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import GeneralSettingsForm from "@/app/(private)/_components/Forms/GeneralSettingsForm";

type Props = {};

const GeneralSettingsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"General Settings"} />
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <GeneralSettingsForm />
            </div>
        </div>
    );
};

export default GeneralSettingsPage;
