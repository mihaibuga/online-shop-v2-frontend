import { toast } from "react-toastify";
import { apiBaseURL, postData } from "../_utils/api";
import { AxiosRequestConfig } from "axios";


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
