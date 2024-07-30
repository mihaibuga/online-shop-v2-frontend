import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

import { IRegisterUser, IUser } from "@/app/(private)/_utils/interfaces";
import { API_ENDPOINTS } from "@/app/(private)/_config/constants";
import { deleteData, fetchData, headers, postData } from "@/app/(private)/_utils/api";

export const createUser = async (
    registeringUserDetails: IRegisterUser,
    fetchConfigs?: AxiosRequestConfig<any> | undefined
) => {
    try {
        let result =
            fetchConfigs !== undefined
                ? await postData<IUser>(API_ENDPOINTS.USERS, registeringUserDetails, fetchConfigs)
                : await postData<IUser>(API_ENDPOINTS.USERS, registeringUserDetails);
        if (result) {
            const user: IUser = {
                userName: result?.data.userName,
                email: result?.data.email,
            };
            return user;
        }
        return result;
    } catch (e: any) {
        toast.warning("Server error occurred");
    }
};

export const getUsers = async (
    token: string | undefined,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    if (token === undefined) {
        toast.warning("A server error has occurred!");
        return;
    }

    const result: any = await fetchData<IUser[]>(
        `${API_ENDPOINTS.USERS}?IsAscending=${query.isAscending}${
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

export const getUserDetails = async (token: string | undefined, query: { id: string }) => {
    if (token === undefined) {
        toast.warning("A server error has occurred!");
        return;
    }

    const result: any = await fetchData<IUser>(`${API_ENDPOINTS.USERS}/${query.id}`, headers(token));

    if (result !== undefined) {
        if (result.data) {
            return result.data;
        } else {
            toast.warning("A server error has occurred!");
            return result;
        }
    }
};

export const deleteUser = async (id: string, token: string | undefined) => {
    try {
        let result = await deleteData<IUser>(`${API_ENDPOINTS.USERS}/${id}`, headers(token));
        if (result) {
            toast.success("The user has been deleted successfully!");
        } else {
            toast.warning("There is a problem deleting the user!");
        }
        return result;
    } catch (e: any) {
        toast.error("Server error occurred");
    }
};