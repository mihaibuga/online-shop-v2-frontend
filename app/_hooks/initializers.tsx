import { toast } from "react-toastify";
import { IUser } from "../_utils/interfaces";

import { getProducts } from "../_services/ProductService";
import { getUsers } from "../_services/UserService";
import { getFiles } from "../_services/FileService";

export const getProductsInit = async (user: IUser | null | undefined, query: any) => {
    if (user) {
        if (user.token) {
            const result: any = await getProducts(user.token, query);
            if (result !== undefined) {
                if (result.data && Array.isArray(result.data.data)) {
                    return result.data;
                } else {
                    toast.warning("A server error has occurred!");
                    return result;
                }
            }
        } else {
            toast.warning("A server error has occurred!");
        }
    }
};

export const getUsersInit = async (user: IUser | null | undefined, query: any) => {
    if (user) {
        if (user.token) {
            const result: any = await getUsers(user.token, query);
            if (result !== undefined) {
                if (result.data && Array.isArray(result.data.data)) {
                    return result.data;
                } else {
                    toast.warning("A server error has occurred!");
                    return result;
                }
            }
        } else {
            toast.warning("A server error has occurred!");
        }
    }
};


export const getFilesInit = async (user: IUser | null | undefined, query: any) => {
    if (user) {
        if (user.token) {
            const result: any = await getFiles(user.token, query);
            if (result !== undefined) {
                if (result.data && Array.isArray(result.data.data)) {
                    return result.data;
                } else {
                    toast.warning("A server error has occurred!");
                    return result;
                }
            }
        } else {
            toast.warning("A server error has occurred!");
        }
    }
};