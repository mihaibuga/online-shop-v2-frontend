"use client";

import React, { Suspense, useEffect, useState } from "react";

import { BsBoxes } from "react-icons/bs";

import { getProductDetails } from "@/app/(private)/_services/ProductService";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IProduct } from "@/app/(private)/_utils/interfaces";

import Spinner from "@/app/(private)/_components/Others/Spinner";
import NoResults from "@/app/(private)/_components/Others/NoResults";

import EditProductForm from "@/app/(private)/_components/Forms/Products/EditProductForm";

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
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Product Details
            </h2>

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
