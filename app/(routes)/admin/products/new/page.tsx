import React from "react";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import CreateProductForm from "@/app/(private)/_components/Forms/Products/CreateProductForm";

type Props = {};

const NewProductPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Add New Product"} />
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
