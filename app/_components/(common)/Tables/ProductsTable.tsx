"use client";

import React, { Suspense, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { MdOutlinePersonOff } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import { deleteProduct, getProducts } from "@/app/_services/ProductService";
import { useStoredUser } from "@/app/_hooks/useStoredUser";
import { IProduct } from "@/app/_utils/interfaces";

import PaginationSection from "../../(admin)/UsersTable/PaginationSection";
import TableActions from "../../(admin)/UsersTable/TableActions";

import NoResults from "../NoResults/NoResults";
import Spinner from "../Spinner/Spinner";
import ExpandedArrow from "../ExpandedArrow/ExpandedArrow";

type Props = {};

const ProductsTable = (props: Props) => {
    const user = useStoredUser();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [itemsOnPage, setItemsOnPage] = useState<number>(10);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState<boolean>(false);
    const [isPreviousPageAvailable, setIsPreviousPageAvailable] = useState<boolean>(false);
    const [pagesNumber, setPagesNumber] = useState<number>(1);
    const [totalProductsNumber, setTotalProductsNumber] = useState<number>(1);

    const onProductDelete = (id: string) => {
        const removed = products.filter((product) => {
            return product.id !== id;
        });
        setProducts(removed);
    };

    useEffect(() => {}, [products]);

    useEffect(() => {
        const getProductsInit = async () => {
            if (user) {
                if (user.token) {
                    const query = { sortBy, isAscending, currentPage, itemsOnPage };

                    const result: any = await getProducts(user.token, query);

                    if (result.data) {
                        setProducts(result.data.data);
                        setIsNextPageAvailable(result.data.isNextPage);
                        setIsPreviousPageAvailable(result.data.isPreviousPage);
                        setPagesNumber(result.data.totalPages);
                        setTotalProductsNumber(result.data.totalRecords);
                    }
                    if (typeof result === "string") {
                        toast.warning("Unable to connect to API");
                    } else if (result.data && Array.isArray(result.data.data)) {
                        setProducts(result?.data.data);
                        setIsLoading(false);
                    }
                } else {
                    toast.warning("A server error has occurred!");
                    setIsLoading(false);
                }
            }
        };
        getProductsInit();
    }, [user, isAscending, sortBy, currentPage, itemsOnPage]);

    const handleProductDelete = async (id: string | undefined) => {
        if (id !== undefined && user?.token) {
            const deletionResult = await deleteProduct(id, user.token);

            if (deletionResult.status && deletionResult.status === 204) {
                onProductDelete(id);
            }
        } else {
            toast.warning("There is a problem deleting the product!");
        }
    };

    const handleSort = (key: string) => {
        setSortBy(key);
        setIsAscending((prev) => !prev);
    };

    const getSortArrow = (key: string) => {
        if (sortBy !== key) {
            return "";
        }
        return <ExpandedArrow isOpen={isAscending} />;
    };

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Suspense fallback={<p>Loading products...</p>}>
            {isLoading ? (
                <Spinner />
            ) : products?.length ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {/* Select Checkbox */}
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="checkbox-all-search" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    {/* Name */}
                                    <th
                                        scope="col"
                                        className="px-6 py-3 hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
                                        onClick={() => handleSort("name")}
                                    >
                                        <div className="flex items-center">Name {getSortArrow("name")}</div>
                                    </th>
                                    {/* Edit */}
                                    <th scope="col" className="px-6 py-3">
                                        Edit
                                    </th>
                                    {/* Delete */}
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {products &&
                                    products.map((product, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        >
                                            {/* Select Checkbox */}
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-table-search-1"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </td>

                                            <th scope="row" className="px-6 py-4">
                                                {product.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    type="button"
                                                    className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-black dark:text-white"
                                                    onClick={() => {
                                                        handleProductDelete(product.id);
                                                    }}
                                                >
                                                    <div className="w-5 h-5 group-hover:scale-110 text-red-600 dark:text-red-500">
                                                        <AiOutlineDelete size={"100%"} />
                                                    </div>
                                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                                        Delete
                                                    </label>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <div className="w-full text-center inline-flex items-center justify-center">
                            <PaginationSection
                                currentPage={currentPage}
                                itemsPerPage={itemsOnPage}
                                totalItems={totalProductsNumber}
                                totalPages={pagesNumber}
                                onPageChange={onPageChange}
                                isNextEnabled={isNextPageAvailable}
                                isPrevEnabled={isPreviousPageAvailable}
                                maxPagesToDisplay={5}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <NoResults text={`No Products`} icon={<MdOutlinePersonOff />} />
            )}
        </Suspense>
    );
};

export default ProductsTable;