import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import useAuthStore from "@/app/(private)/_stores/authStore";
import { loginUser, registerUser } from "@/app/(private)/_services/AuthService";

import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";
import PasswordInput from "@/app/(private)/_components/Forms/FormFields/PasswordInput";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import LogInSignUpButton from "@/app/(private)/_components/Buttons/LogInSignUpButton";

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
                registerUser(
                    { email: form.email, userName: form.userName, password: form.password, role: "User" },
                    setLoggedInUser
                );
            } else {
                toast.error("There has been an error registering!");
            }
        }
    };

    return (
        <div className="px-6 space-y-2 md:space-y-4 sm:px-8">
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
                <TextInput
                    id={"username"}
                    labelText={"Username"}
                    placeholder={"Username"}
                    register={register}
                    errors={errors}
                />

                {isLogIn !== true && <EmailInput register={register} errors={errors} />}

                <PasswordInput register={register} errors={errors} />

                <LogInSignUpButton isLogIn={isLogIn} />
            </form>
        </div>
    );
};

export default EmailAuthForm;
