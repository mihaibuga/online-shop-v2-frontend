import React from "react";

import { googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";

import useAuthStore from "@/app/(private)/_stores/authStore";
import { useRouter } from "next/navigation";
import { URL_PATHS } from "../../_config/constants";

type Props = {};

const SignOutButton = (props: Props) => {
    const router = useRouter();
    const { removeLoggedInUserSession } = useAuthStore();

    return (
        <button
            type="button"
            className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-black dark:text-white gap-1"
            onClick={() => {
                googleLogout();
                removeLoggedInUserSession();
                router.push(URL_PATHS.HOME.path);
            }}
        >
            <div className="w-6 h-6 group-hover:scale-110">
                <AiOutlineLogout size={"100%"} color="red" />
            </div>
            <span>Sign out</span>
        </button>
    );
};

export default SignOutButton;
