import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import GeneralSettingsForm from "@/app/(private)/_components/Forms/GeneralSettingsForm";

type Props = {};

const PAGE_TITLE = "General Settings";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const GeneralSettingsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <GeneralSettingsForm />
            </div>
        </div>
    );
};

export default GeneralSettingsPage;
