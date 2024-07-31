import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { IRegisterUser, ILoginUser, IUser, IDecoded } from "@/app/(private)/_utils/interfaces";
import { API_ENDPOINTS, googleUserInfoURL } from "@/app/(private)/_config/constants";
import { postData } from "@/app/(private)/_utils/api";

// Email Auth
export const registerAPI = async (registeringUserDetails: IRegisterUser) => {
    return await postData<IUser>(API_ENDPOINTS.AUTH.REGISTER, registeringUserDetails);
};

export const loginAPI = async (loginUserDetails: ILoginUser) => {
    return await postData<IUser>(API_ENDPOINTS.AUTH.LOGIN, loginUserDetails);
};

export const registerUser = async (registeringUserDetails: IRegisterUser, setLoggedInUser: any) => {
    try {
        let result = await registerAPI(registeringUserDetails);
        if (result) {
            const user: IUser = {
                id: result?.data.id,
                userName: result?.data.userName,
                email: result?.data.email,
                token: result?.data.token!,
            };
            setLoggedInUser(user);
            toast.success("Registered and logged in successfully!");
        }
    } catch (e: any) {
        toast.warning("Server error occurred");
    }
};

export const loginUser = async (loginUserDetails: ILoginUser, setLoggedInUser: any) => {
    try {
        let result = await loginAPI(loginUserDetails);
        if (result) {
            const user: IUser = {
                id: result?.data.id,
                userName: result?.data.userName,
                email: result?.data.email,
                token: result?.data.token!,
            };
            setLoggedInUser(user);
            toast.success("Login Success!");
        }
    } catch (e: any) {
        toast.warning("Server error occurred");
    }
};

// Google Auth
const getGoogleUserInfo = async (response: any) => {
    let authToken, userInfo;

    if (response.access_token) {
        authToken = `${response.token_type} ${response.access_token}`;
        userInfo = await axios
            .get(googleUserInfoURL, {
                headers: { Authorization: authToken },
            })
            .then((res) => res.data);
    } else {
        authToken = response.credential;
        const decoded: IDecoded = jwtDecode(authToken);
        userInfo = decoded;
    }

    return userInfo;
};

export const createOrGetUser = async (response: any, setLoggedInUser: any) => {
    let userInfo = await getGoogleUserInfo(response);

    const googleUser: IUser = {
        googleId: userInfo.sub,
        userName: userInfo.email,
        email: userInfo.email,
        profileImage: userInfo.picture,
        lastName: userInfo.family_name,
        firstName: userInfo.given_name,
        fullName: userInfo.name,
    };

    const registeredUserWithGoogle = await postData<IUser>(API_ENDPOINTS.AUTH.GOOGLE, googleUser);

    if (typeof registeredUserWithGoogle === "object" && registeredUserWithGoogle.data) {
        googleUser.token = registeredUserWithGoogle.data.token;
        googleUser.role = registeredUserWithGoogle.data.role;
        setLoggedInUser(googleUser);
        toast.success("Logged in with Google successfully!");
    } else {
        toast.warning("Google authentication failed! Please try again later.");
    }
};
