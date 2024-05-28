import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { apiDomain } from "@/app/_utils/env";
import { handleError } from "../_helpers/ErrorHandler";

export const apiBaseURL = `${apiDomain}/api`;

export const fetchData = async <T,>(endpoint: string): Promise<T | any> => {
    try {
        const response = await axios.get<T>(endpoint);
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