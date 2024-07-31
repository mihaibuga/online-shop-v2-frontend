"use client";

import React from "react";
import GeneralSettingsForm from "@/app/(private)/_components/Forms/GeneralSettingsForm";

type Props = {};

const GeneralSettingsPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                General Settings
            </h2>
            <hr className="mb-4" />
            <div className="max-w-full sm:max-w-sm">
                <GeneralSettingsForm />
            </div>
        </div>
    );
};

export default GeneralSettingsPage;
