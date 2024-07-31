"use client";

import React, { Suspense, useEffect, useState } from "react";

import { BsBoxes } from "react-icons/bs";

import { getProductDetails } from "@/app/(private)/_services/ProductService";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IProduct } from "@/app/(private)/_utils/interfaces";

import Spinner from "@/app/(private)/_components/Others/Spinner";
import NoResults from "@/app/(private)/_components/Others/NoResults";

import EditProductForm from "@/app/(private)/_components/Forms/Products/EditProductForm";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Params = {
    id: string;
};

const ProductPage = ({ params }: { params: Params }) => {
    const loggedInUser = useStoredUser();

    const [productDetails, setProductDetails] = useState<IProduct>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const query = { id: params.id };

        getProductDetails(loggedInUser?.token, query).then((fetchedProductData) => {
            if (fetchedProductData !== undefined) {
                setProductDetails(fetchedProductData);
            }
            setIsLoading(false);
        });
    }, [loggedInUser, params.id]);

    return (
        <div>
            <AdminPageTitle titleText={"Product Details"} />

            <Suspense fallback={<p>Loading product details...</p>}>
                {isLoading ? (
                    <Spinner />
                ) : productDetails ? (
                    <EditProductForm initialProductDetails={productDetails} isLoading={isLoading} />
                ) : (
                    <NoResults text={`No Product`} icon={<BsBoxes />} />
                )}
            </Suspense>
        </div>
    );
};

export default ProductPage;
