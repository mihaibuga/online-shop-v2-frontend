import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import ProductsTable from "@/app/(private)/_components/Tables/ProductsTable";

type Props = {};

const PAGE_TITLE = "Products";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const ProductsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <ProductsTable />
        </div>
    );
};

export default ProductsPage;
