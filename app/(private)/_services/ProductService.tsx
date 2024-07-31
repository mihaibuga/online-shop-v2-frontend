import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

import { API_ENDPOINTS } from "@/app/(private)/_config/constants";
import { deleteData, fetchData, headers, postData } from "@/app/(private)/_utils/api";
import { IProduct } from "@/app/(private)/_utils/interfaces";

export const createProduct = async (
    newProductDetails: FormData,
    fetchConfigs?: AxiosRequestConfig<any> | undefined
) => {
    try {
        let result =
            fetchConfigs !== undefined
                ? await postData<IProduct>(API_ENDPOINTS.PRODUCTS, newProductDetails, fetchConfigs)
                : await postData<IProduct>(API_ENDPOINTS.PRODUCTS, newProductDetails);
        if (result) {
            const product: IProduct = {
                name: result?.data.name,
                description: result?.data.description,
                price: result?.data.price,
                isEnabled: result?.data.isEnabled,
            };
            return product;
        }
        return result;
    } catch (e: any) {
        toast.warning("Server error occurred");
    }
};

export const getProducts = async (
    token: string | undefined,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    if (token === undefined) {
        toast.warning("A server error has occurred!");
        return;
    }

    const result: any = await fetchData<IProduct[]>(
        `${API_ENDPOINTS.PRODUCTS}?IsAscending=${query.isAscending}${
            query.sortBy !== undefined ? `&SortBy=${query.sortBy}` : ""
        }${query.currentPage !== undefined ? `&PageNumber=${query.currentPage}` : ""}${
            query.itemsOnPage !== undefined ? `&PageSize=${query.itemsOnPage}` : ""
        }`,
        headers(token)
    );

    if (result !== undefined) {
        if (result.data && Array.isArray(result.data.data)) {
            return result.data;
        } else {
            toast.warning("A server error has occurred!");
            return result;
        }
    }
};

export const getProductDetails = async (token: string | undefined, query: { id: string }) => {
    if (token === undefined) {
        toast.warning("A server error has occurred!");
        return;
    }

    const result: any = await fetchData<IProduct>(`${API_ENDPOINTS.PRODUCTS}/${query.id}`, headers(token));

    if (result !== undefined) {
        if (result.data) {
            return result.data;
        } else {
            toast.warning("A server error has occurred!");
            return result;
        }
    }
};

export const deleteProduct = async (id: string, token: string | undefined) => {
    try {
        let result = await deleteData<IProduct>(`${API_ENDPOINTS.PRODUCTS}/${id}`, headers(token));
        if (result) {
            toast.success("The product has been deleted successfully!");
        } else {
            toast.warning("There is a problem deleting the product!");
        }
        return result;
    } catch (e: any) {
        toast.error("Server error occurred");
    }
};
