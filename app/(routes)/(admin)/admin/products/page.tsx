import React from "react";
import ProductsTable from "@/app/(private)/_components/(common)/Tables/ProductsTable";

type Props = {};

const ProductsPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Products
            </h2>

            <ProductsTable />
        </div>
    );
};

export default ProductsPage;
