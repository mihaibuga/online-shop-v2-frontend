import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { apiBaseURL, deleteData, fetchData, postData } from "../_utils/api";
import { IProduct } from "../_utils/interfaces";
import { headers } from "./UserService";

export const createProduct = async (
    newProductDetails: FormData,
    fetchConfigs?: AxiosRequestConfig<any> | undefined
) => {
    try {
        let result =
            fetchConfigs !== undefined
                ? await postData<IProduct>(apiBaseURL + "/products", newProductDetails, fetchConfigs)
                : await postData<IProduct>(apiBaseURL + "/products", newProductDetails);
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
    token: string,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    return await fetchData<IProduct[]>(
        `${apiBaseURL}/products?IsAscending=${query.isAscending}${
            query.sortBy !== undefined ? `&SortBy=${query.sortBy}` : ""
        }${query.currentPage !== undefined ? `&PageNumber=${query.currentPage}` : ""}${
            query.itemsOnPage !== undefined ? `&PageSize=${query.itemsOnPage}` : ""
        }`,
        headers(token)
    );
};

export const getProductDetails = async (token: string, query: { id: string }) => {
    return await fetchData<IProduct>(`${apiBaseURL}/products/${query.id}`, headers(token));
};

export const deleteProduct = async (id: string, token: string) => {
    try {
        let result = await deleteData<IProduct>(`${apiBaseURL}/products/${id}`, headers(token));
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