import React from "react";
import { Metadata } from "next";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import ProductDetailsSection from "./ProductDetailsSection";

type Params = {
    id: string;
};

const PAGE_TITLE = "Product Details";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const ProductPage = ({ params }: { params: Params }) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <ProductDetailsSection productId={params.id} />
        </div>
    );
};

export default ProductPage;
