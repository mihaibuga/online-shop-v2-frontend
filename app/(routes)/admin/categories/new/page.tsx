import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "New Category";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const NewCategoryPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
        </div>
    );
};

export default NewCategoryPage;
