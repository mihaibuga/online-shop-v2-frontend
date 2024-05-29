import { IUser } from "../_utils/interfaces";
import { apiBaseURL, fetchData } from "../_utils/api";

export const getUsers = async (token: string) => {
    return await fetchData<IUser[]>(`${apiBaseURL}/users`, { headers: { Authorization: `Bearer ${token}` } });
};
