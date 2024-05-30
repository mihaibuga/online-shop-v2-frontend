import { IUser } from "../_utils/interfaces";
import { apiBaseURL, deleteData, fetchData } from "../_utils/api";
import { toast } from "react-toastify";

const headers = (token: string) => {
    return { headers: { Authorization: `Bearer ${token}` } };
};

export const getUsers = async (token: string) => {
    return await fetchData<IUser[]>(`${apiBaseURL}/users`, headers(token));
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
        toast.error("Server error occured");
    }
};