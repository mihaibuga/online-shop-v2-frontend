import React from "react";
import { Metadata } from "next";

import NewFileForm from "@/app/(private)/_components/Forms/Files/NewFileForm";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Upload New Media";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const NewMediaPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />

            <p className="text-md text-gray-400 mt-1">Upload a file to your library</p>

            <div className="flex flex-col w-full h-full my-5 justify-center">
                <NewFileForm />
            </div>
        </div>
    );
};

export default NewMediaPage;
