import { toast } from "react-toastify";
import { apiBaseURL, fetchData, postData } from "../_utils/api";
import { AxiosRequestConfig } from "axios";
import { IFile } from "../_utils/interfaces";
import { headers } from "./UserService";


export const fileUploadHeaders = (token: string | undefined) => {
    return { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } };
};

export const uploadFile = async (formData: any, fetchConfigs?: AxiosRequestConfig<any> | undefined) => {
    try {
        let response = await postData(apiBaseURL + "/files", formData, fetchConfigs);

        return response;
    } catch (e: any) {
        toast.warning("Server error occurred");
    }
};

export const getFiles = async (
    token: string,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    return await fetchData<IFile[]>(
        `${apiBaseURL}/files?IsAscending=${query.isAscending}${
            query.sortBy !== undefined ? `&SortBy=${query.sortBy}` : ""
        }${query.currentPage !== undefined ? `&PageNumber=${query.currentPage}` : ""}${
            query.itemsOnPage !== undefined ? `&PageSize=${query.itemsOnPage}` : ""
        }`,
        headers(token)
    );
};