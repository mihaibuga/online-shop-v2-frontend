import axios, { AxiosRequestConfig } from "axios";
import { apiDomain } from "@/app/(private)/_utils/env";
import { handleError } from "@/app/(private)/_helpers/ErrorHandler";

export const apiBaseURL = `${apiDomain}/api`;

export const headers = (token: string | undefined) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Expose-Headers": "Authorization",
        },
    };
};

export const fetchData = async <T,>(endpoint: string, headers: any): Promise<T | any> => {
    try {
        const response = await axios.get<T>(endpoint, headers);
        return response;
    } catch (error: any) {
        handleError(error);
    }
};

export const postData = async <T,>(
    endpoint: string,
    payload: any,
    config?: AxiosRequestConfig<any> | undefined
): Promise<T | any> => {
    try {
        const data =
            config !== undefined
                ? await axios.post<T>(endpoint, payload, config)
                : await axios.post<T>(endpoint, payload);
        return data;
    } catch (error: any) {
        handleError(error);
    }
};

export const deleteData = async <T,>(endpoint: string, headers: any): Promise<T | any> => {
    try {
        const data = await axios.delete<T>(endpoint, headers);
        return data;
    } catch (error: any) {
        handleError(error);
    }
};
