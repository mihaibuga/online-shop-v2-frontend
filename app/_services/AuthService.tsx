import { IRegisterUser, ILoginUser, IUser } from "../_utils/interfaces";
import { apiBaseURL, postData } from "../_utils/api";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Email Auth
export const registerAPI = async (username: string, password: string, email?: string) => {
    const payload = {
        email: email,
        username: username,
        password: password,
    };

    return await postData<IUser>(apiBaseURL + "/auth/register", payload);
};

export const loginAPI = async (username: string, password: string) => {
    const payload = {
        username: username,
        password: password,
    };

    return await postData<IUser>(apiBaseURL + "/auth/login", payload);
};

export const registerUser = async (
    registeringUserDetails: IRegisterUser,
    setLoggedInUser: any
) => {
    const { email, userName, password } = registeringUserDetails;

    await registerAPI(userName, password, email)
        .then((result: any) => {
            if (result) {
                console.log(result.data);
                const user: IUser = {
                    id: result?.data.id,
                    userName: result?.data.userName,
                    email: result?.data.email,
                    token: result?.data.token!,
                };
                setLoggedInUser(user);
                toast.success("Login Success!");
            }
        })
        .catch((e: any) => toast.warning("Server error occured"));
};

export const loginUser = async (loginUserDetails: ILoginUser, setLoggedInUser: any) => {
    const { userName, password } = loginUserDetails;

    await loginAPI(userName, password)
        .then((result: any) => {
            if (result) {
                console.log(result.data);
                const user: IUser = {
                    id: result?.data.id,
                    userName: result?.data.userName,
                    email: result?.data.email,
                    token: result?.data.token!,
                };
                setLoggedInUser(user);
                toast.success("Login Success!");
            }
        })
        .catch((e: any) => toast.warning("Server error occured"));
};

// Google Auth
export const createOrGetUser = async (response: any, setLoggedInUser: any) => {
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

    setLoggedInUser(user);
};