export const STORE_NAME = "Storify";

export const URL_PATHS = {
    HOME: {
        path:  "/",
    },
    // AUTH
    LOGIN: {
        path:  "/myaccount/auth/login",
        label:  "Sign In",
    },
    SIGNUP: {
        path:  "/myaccount/auth/register",
        label:  "Register",
    },
    // Admin access
    ADMIN: {
        path:  "/admin",
        label:  "Admin",
    },
    // Access to personal user's account
    MY_ACCOUNT: {
        path:  "/myaccount",
        label:  "My Account",
    },
    PROFILE: {
        path:  "/myaccount/profile",
        label:  "My Profile",
    },
    WISHLIST: {
        path:  "/myaccount/wishlist",
        label:  "My Wishlist",
    },
    ORDERS: {
        path:  "/myaccount/orders",
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
