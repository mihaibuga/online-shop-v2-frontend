import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

import { IRegisterUser, IUser } from "../_utils/interfaces";
import { apiBaseURL, deleteData, fetchData, postData } from "../_utils/api";

export const headers = (token: string) => {
    return { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } };
};

export const getUsers = async (
    token: string,
    query: { isAscending: boolean; sortBy: string | undefined; currentPage: number; itemsOnPage: number }
) => {
    return await fetchData<IUser[]>(
        `${apiBaseURL}/users?IsAscending=${query.isAscending}${
            query.sortBy !== undefined ? `&SortBy=${query.sortBy}` : ""
        }${query.currentPage !== undefined ? `&PageNumber=${query.currentPage}` : ""}${
            query.itemsOnPage !== undefined ? `&PageSize=${query.itemsOnPage}` : ""
        }`,
        headers(token)
    );
};

export const deleteUser = async (id: string, token: string) => {
    try {
        let result = await deleteData<IUser>(`${apiBaseURL}/users/${id}`, headers(token));
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

export const createUser = async (
    registeringUserDetails: IRegisterUser,
    fetchConfigs?: AxiosRequestConfig<any> | undefined
) => {
    try {
        let result =
            fetchConfigs !== undefined
                ? await postData<IUser>(apiBaseURL + "/users", registeringUserDetails, fetchConfigs)
                : await postData<IUser>(apiBaseURL + "/users", registeringUserDetails);
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
