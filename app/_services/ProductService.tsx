import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { apiBaseURL, postData } from "../_utils/api";
import { ICreateProduct, IProduct } from "../_utils/interfaces";

export const createProduct = async (
    newProductDetails: ICreateProduct,
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
        toast.warning("Server error occured");
    }
};
