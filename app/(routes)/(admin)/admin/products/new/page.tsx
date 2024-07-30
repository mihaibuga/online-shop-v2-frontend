import CreateProductForm from "@/app/(private)/_components/Forms/Products/CreateProductForm";
import React from "react";

type Props = {};

const NewProductPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Add New Product
            </h2>
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
