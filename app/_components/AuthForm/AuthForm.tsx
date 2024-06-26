"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

import useAuthStore from "@/app/_stores/authStore";
import { createOrGetUser } from "@/app/_utils/api";
import { STORE_NAME, URL_PATHS } from "@/app/_utils/constants";

type Props = {
    isLogIn?: boolean;
};

const AuthForm = ({ isLogIn }: Props) => {
    const router = useRouter();

    const { userProfile, addUser } = useAuthStore();

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            createOrGetUser(response, addUser);
            // router.push(closeHref);
        },
        onError: () => console.log("Login Failed"),
        flow: "implicit",
    });

    useEffect(() => {
        if (userProfile) {
            router.push("/");
        }
    }, [router, userProfile]);

    return (
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden w-full max-w-sm lg:max-w-md">
                <div className="w-full p-8">
                    <h2
                        id="auth-title"
                        className="text-center mx-auto mt-12 mb-8 text-2xl md:text-3xl md:text-3xl font-bold leading-none tracking-tight text-gray-700"
                    >
                        {isLogIn ? "Log in to" : "Sign up for"} {STORE_NAME}
                    </h2>

                    <div className="flex flex-col items-center gap-2 min-h-[70px] max-h-[250px] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => handleGoogleLogin()}
                            className="w-full px-4 py-2 border flex gap-2 hover:bg-gray-100 rounded-lg text-slate-700 hover:text-slate-900 shadow-md transition duration-300"
                        >
                            <div className="left min-w-[30px]">
                                <FcGoogle size={"1.5rem"} />
                            </div>
                            <div className="right flex w-full justify-center text-md lg:text-lg whitespace-nowrap text-gray-600 font-bold">Continue with Google</div>
                        </button>
                    </div>

                    <div className="auth-agreement flex items-center justify-center px-2 md:px-10 py-[30px]">
                        <p className="text-sm w-full text-center text-gray-600">
                            By continuing, you agree to {STORE_NAME}’s{" "}
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={URL_PATHS.TERMS_OF_SERVICE.path}
                                className="text-blue-700"
                            >
                                {URL_PATHS.TERMS_OF_SERVICE.label}
                            </Link>{" "}
                            and confirm that you have read {STORE_NAME}’s{" "}
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={URL_PATHS.PRIVACY_POLICY.path}
                                className="text-blue-700"
                            >
                                {URL_PATHS.PRIVACY_POLICY.label}
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="auth-switch flex border-t gap-1 items-center justify-center h-[64px] text-xs text-gray-500">
                        <div>{isLogIn ? "Don't have any account yet?" : "Already have an account?"}</div>
                        <Link href={isLogIn ? URL_PATHS.SIGNUP.path : URL_PATHS.LOGIN.path} className="text-blue-700">
                            <span className="">{isLogIn ? URL_PATHS.SIGNUP.label : URL_PATHS.LOGIN.label}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
