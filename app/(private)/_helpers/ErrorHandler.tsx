import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { URL_PATHS } from "@/app/(private)/_utils/constants";

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        var err: AxiosResponse<unknown, any> | undefined = error.response;

        if (err !== undefined) {
            var data: any = err.data;

            if (data) {
                if (Array.isArray(data)) {
                    for (let error of data) {
                        toast.error(error.description);
                    }
                    return data;
                } else if (typeof data.errors === "object") {
                    for (let e in data.errors) {
                        toast.warning(data.errors[e][0]);
                    }
                } else if (err?.status == 401) {
                    toast.warning("Please login");
                    window.history.pushState({}, "LoginPage", URL_PATHS.LOGIN.path);
                }
            }
        }
    }
};
