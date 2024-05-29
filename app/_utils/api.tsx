import axios from "axios";
import { apiDomain } from "@/app/_utils/env";
import { handleError } from "../_helpers/ErrorHandler";

export const apiBaseURL = `${apiDomain}/api`;

export const fetchData = async <T,>(endpoint: string, headers: any): Promise<T | any> => {
    try {
        const response = await axios.get<T>(endpoint, headers);
        return response;
    } catch (error: any) {
        handleError(error);
    }
};

export const postData = async <T,>(endpoint: string, payload: any): Promise<T | any> => {
    try {
        const data = await axios.post<T>(endpoint, payload);
        return data;
    } catch (error: any) {
        handleError(error);
    }
};