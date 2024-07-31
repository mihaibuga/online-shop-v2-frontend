import React from "react";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import ProductsTable from "@/app/(private)/_components/Tables/ProductsTable";

type Props = {};

const ProductsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Products"} />
            <ProductsTable />
        </div>
    );
};

export default ProductsPage;
