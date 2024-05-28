import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useAuthStore from "@/app/_stores/authStore";
import { loginUser, registerUser } from "@/app/_services/AuthService";

interface Props {
    isLogIn?: boolean;
}

type FormInputs = {
    email?: string;
    userName: string;
    password: string;
};

const loginValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const registerValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const EmailAuthForm = ({ isLogIn }: Props) => {
    const { setLoggedInUser } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(isLogIn ? loginValidationSchema : registerValidationSchema),
    });

    const handleFormSubmit = (form: FormInputs) => {
        if (isLogIn) {
            loginUser(form, setLoggedInUser);
        } else {
            registerUser(form, setLoggedInUser);
        }
    };

    return (
        <div className="px-6 space-y-2 md:space-y-4 sm:px-8">
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                        {...register("userName")}
                    />
                    {errors.userName ? <p className="text-red-500">{errors.userName.message}</p> : ""}
                </div>

                {isLogIn !== true && (
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            {...register("email")}
                        />
                        {errors.email ? <p className="text-red-500">{errors.email.message}</p> : ""}
                    </div>
                )}

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("password")}
                    />
                    {errors.password ? <p className="text-red-500">{errors.password.message}</p> : ""}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-400 text-center disabled:opacity-50 disabled:pointer-events-none shadow-md transition duration-300"
                >
                    {isLogIn ? "Log in" : "Sign up"}
                </button>
            </form>
        </div>
    );
};

export default EmailAuthForm;
