import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuthStore from "@/app/_stores/authStore";
import { loginUser, registerUser } from "@/app/_services/AuthService";

import UsernameInput from "./FormFields/UsernameInput";
import EmailInput from "./FormFields/EmailInput";
import PasswordInput from "./FormFields/PasswordInput";

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
            loginUser(
                {
                    userName: form.userName,
                    password: form.password,
                },
                setLoggedInUser
            );
        } else {
            if (form.email !== undefined) {
                registerUser({ email: form.email, userName: form.userName, password: form.password }, setLoggedInUser);
            } else {
                toast.error("There has been an error registering!");
            }
        }
    };

    return (
        <div className="px-6 space-y-2 md:space-y-4 sm:px-8">
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
                <UsernameInput register={register} errors={errors} />

                {isLogIn !== true && <EmailInput register={register} errors={errors} />}

                <PasswordInput register={register} errors={errors} />

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
