import { IRegisterUser, ILoginUser, IUser } from "../_utils/interfaces";
import { apiBaseURL, postData } from "../_utils/api";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface IDecoded {
    sub: string;
    name: string;
    family_name: string;
    given_name: string;
    picture: string;
    email: string;
}

// Email Auth
export const registerAPI = async (registeringUserDetails: IRegisterUser) => {
    return await postData<IUser>(apiBaseURL + "/auth/register", registeringUserDetails);
};

export const loginAPI = async (loginUserDetails: ILoginUser) => {
    return await postData<IUser>(apiBaseURL + "/auth/login", loginUserDetails);
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
        const decoded: IDecoded = jwtDecode(authToken);
        userInfo = decoded;
    }

    const { name, picture, sub, family_name, given_name, email } = userInfo;

    const user: IUser = {
        googleId: sub,
        userName: email,
        email: email,
        profileImage: picture,
        lastName: family_name,
        firstName: given_name,
        fullName: name,
    };

    const registeredUserWithGoogle = await postData<IUser>(apiBaseURL + "/auth/google", user);

    if (typeof registeredUserWithGoogle === "object" && registeredUserWithGoogle.data) {
        user.token = registeredUserWithGoogle.data.token;
        setLoggedInUser(user);
        toast.success("Logged in with Google successfully!");
    } else {
        toast.warning("Google authentication failed! Please try again later.");
    }
};
