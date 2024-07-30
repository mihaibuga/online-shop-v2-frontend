export const STORE_NAME = "Storify";

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
    // Access to personal user's account
    MY_ACCOUNT: {
        path:  "/user",
        label:  "My Account",
    },
    PROFILE: {
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
