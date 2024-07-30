import { toast } from "react-toastify";
import { AxiosRequestConfig } from "axios";

import { apiBaseURL, fetchData, postData } from "@/app/(private)/_utils/api";
import { IFile } from "@/app/(private)/_utils/interfaces";
import { headers } from "@/app/(private)/_services/UserService";

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
    token: string | undefined,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    if (token === undefined) {
        toast.warning("A server error has occurred!");
        return;
    }

    const result: any = await fetchData<IFile[]>(
        `${apiBaseURL}/files?IsAscending=${query.isAscending}${
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
