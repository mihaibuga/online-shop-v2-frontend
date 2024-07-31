import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import CreateProductForm from "@/app/(private)/_components/Forms/Products/CreateProductForm";

type Props = {};

const PAGE_TITLE = "Add New Product";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const NewProductPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <div className="mb-4">
                <p>Create a brand new product and add it to this site.</p>
            </div>

            <div className="max-w-full sm:max-w-sm space-y-2 md:space-y-4">
                <CreateProductForm />
            </div>
        </div>
    );
};

export default NewProductPage;
