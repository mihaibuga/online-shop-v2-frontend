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

// Users
export const createOrGetUser = async (response: any, addUser: any) => {
    let authToken, userInfo;

    if (response.access_token) {
        authToken = `${response.token_type} ${response.access_token}`;

        userInfo = await axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: authToken },
            })
            .then((res) => res.data);
    } else {
        authToken = response.credential;
        const decoded: { name: string; picture: string; sub: string } = jwtDecode(authToken);
        userInfo = decoded;
    }

    const { name, picture, sub } = userInfo;

    const user = {
        id: sub,
        userName: name,
        profileImage: picture,
    };

    addUser(user);
};