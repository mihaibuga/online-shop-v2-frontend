"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import { FaBox } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";

import { getProductDetails } from "@/app/(private)/_services/ProductService";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IProduct } from "@/app/(private)/_utils/interfaces";

import Spinner from "@/app/(private)/_components/(common)/Spinner/Spinner";
import NoResults from "@/app/(private)/_components/(common)/NoResults/NoResults";
import FilesGallery from "@/app/(private)/_components/Galleries/FilesGallery";

type Params = {
    id: string;
};

const ProductPage = ({ params }: { params: Params }) => {
    const loggedInUser = useStoredUser();

    const [productDetails, setProductDetails] = useState<IProduct>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isEnabled, setIsEnabled] = useState<boolean>(true);

    useEffect(() => {
        const query = { id: params.id };

        getProductDetails(loggedInUser?.token, query).then((fetchedProductData) => {
            if (fetchedProductData !== undefined) {
                setProductDetails(fetchedProductData);
                setIsEnabled(fetchedProductData.isEnabled);
            }
            setIsLoading(false);
        });
    }, [loggedInUser, params.id]);

    const getImages = (productImages: any) => productImages.map((productImage: any) => productImage.image);

    return (
        <Suspense fallback={<p>Loading product details...</p>}>
            {isLoading ? (
                <Spinner />
            ) : productDetails ? (
                <div>
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Product Details
                    </h2>

                    <div className="p-2 md:p-4 space-y-5">
                        <div className="w-full border border-gray-300 dark:border-gray-700 rounded-lg divide-y divide-gray-300 dark:divide-gray-700">
                            <h3 className="px-6 py-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Product Info
                            </h3>
                            <div className="px-6 py-8 space-y-4">
                                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                    {productDetails.thumbnailImage ? (
                                        <>
                                            <div className={`w-${40} h-${40} relative`}>
                                                <Image
                                                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                                    src={productDetails.thumbnailImage}
                                                    alt="Bordered product thumbnail"
                                                    quality={100}
                                                    fill
                                                    priority
                                                    sizes="100%"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                            </div>

                                            <div className="flex flex-col space-y-5 sm:ml-8">
                                                <button
                                                    type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                                >
                                                    Change thumbnail
                                                </button>
                                                <button
                                                    type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                                >
                                                    Delete thumbnail
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`w-${40} h-${40}`}>
                                                <FaBox size={"100%"} />
                                            </div>

                                            <div className="flex flex-col space-y-5 sm:ml-8">
                                                <button
                                                    type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                                >
                                                    Upload thumbnail
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="items-center text-[#202142]">
                                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                        <div className="w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Name"
                                                value={productDetails.name ? productDetails.name : ""}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here..."
                                            value={productDetails.description ? productDetails.description : ""}
                                        ></textarea>
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="price"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="9.99"
                                            value={productDetails.price ? productDetails.price : ""}
                                        />
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="isEnabled"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Availability
                                        </label>
                                        <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input
                                                id="isEnabled"
                                                type="checkbox"
                                                onClick={() => setIsEnabled((prev) => !prev)}
                                                className="sr-only peer"
                                                checked={isEnabled}
                                            />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                {productDetails.isEnabled ? "Enabled" : "Disabled"}
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-300 dark:border-gray-700 rounded-lg divide-y divide-gray-300 dark:divide-gray-700">
                            <h3 className="px-6 py-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Media
                            </h3>
                            <div className="px-6 py-8 space-y-4">
                                <div>
                                    <FilesGallery
                                        files={getImages(productDetails.productImages)}
                                        isLoading={isLoading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoResults text={`No Product`} icon={<BsBoxes />} />
            )}
        </Suspense>
    );
};

export default ProductPage;
