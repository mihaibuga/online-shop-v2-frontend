import { apiDomain } from "@/app/(private)/_config/env";

export const STORE_NAME = "Storify";

export const apiBaseURL = `${apiDomain}/api`;
export const googleUserInfoURL = "https://www.googleapis.com/oauth2/v3/userinfo";

export const API_ENDPOINTS = {
    AUTH: {
        REGISTER: apiBaseURL + "/auth/register",
        LOGIN: apiBaseURL + "/auth/login",
        GOOGLE: apiBaseURL + "/auth/google",
    },
    FILES: apiBaseURL + "/files",
    PRODUCTS: apiBaseURL + "/products",
    USERS: apiBaseURL + "/users"
}

export const URL_PATHS = {
    HOME: {
        path:  "/",
    },
    // AUTH
    LOGIN: {
        path:  "/user/login",
        label:  "Sign In",
    },
    SIGNUP: {
        path:  "/user/register",
        label:  "Register",
    },
    // Admin access
    ADMIN: {
        path:  "/admin",
        label:  "Admin",
    },
    ADMIN_MESSAGES: {
        path:  "/admin/messages",
        label:  "Admin Messages",
    },
    ADMIN_NOTIFICATIONS: {
        path:  "/admin/notifications",
        label:  "Admin Notifications",
    },
    ADMIN_BRANDS: {
        path:  "/admin/brands",
        label:  "Admin Brands",
    },
    ADMIN_CATEGORIES: {
        path:  "/admin/categories",
        label:  "Admin Categories",
    },
    ADMIN_MEDIA: {
        path:  "/admin/media",
        label:  "Admin Media",
    },
    ADMIN_PRODUCTS: {
        path:  "/admin/products",
        label:  "Admin Products",
    },
    ADMIN_PROFILE: {
        path:  "/admin/profile",
        label:  "Admin Profile",
    },
    // Access to personal user's account
    MY_ACCOUNT: {
        path:  "/user",
        label:  "My Account",
    },
    USER_PROFILE: {
        path:  "/user/profile",
        label:  "My Profile",
    },
    WISHLIST: {
        path:  "/user/wishlist",
        label:  "My Wishlist",
    },
    ORDERS: {
        path:  "/user/orders",
        label:  "My Orders",
    },
    // Orders
    CHECKOUT: {
        path:  "/checkout",
        label:  "Checkout",
    },
    // Helpful links
    TERMS_OF_SERVICE: {
        path:  "/legal/terms-of-use",
        label:  "Terms of Service",
    },
    PRIVACY_POLICY: {
        path:  "/legal/privacy-policy",
        label:  "Privacy Policy",
    }
};
