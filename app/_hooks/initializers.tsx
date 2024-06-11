import { toast } from "react-toastify";
import { getProducts } from "../_services/ProductService";
import { IUser } from "../_utils/interfaces";

export const getProductsInit = async (user: IUser | null | undefined, query: any) => {
    if (user) {
        if (user.token) {
            const result: any = await getProducts(user.token, query);

            if (result !== undefined) {
                if (typeof result === "string") {
                    toast.warning("A server error has occurred!");
                } else if (result.data && Array.isArray(result.data.data)) {
                    return result?.data;
                } else {
                    toast.warning("A server error has occurred!");
                }
            } else {
                toast.warning("Unable to connect to API");
            }
        } else {
            toast.warning("A server error has occurred!");
        }
    }
};