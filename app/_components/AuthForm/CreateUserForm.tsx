"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { createUser, headers } from "@/app/_services/UserService";
import { useStoredUser } from "@/app/_hooks/useStoredUser";

import UsernameInput from "./FormFields/UsernameInput";
import EmailInput from "./FormFields/EmailInput";
import PasswordInput from "./FormFields/PasswordInput";
import SelectInput from "./FormFields/SelectInput";
import TextInput from "./FormFields/TextInput";

type Props = {};

type FormInputs = {
    email: string;
    userName: string;
    password: string;
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const CreateUserForm = (props: Props) => {
    const user = useStoredUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const handleFormSubmit = async (form: FormInputs) => {
        if (user?.token) {
            const newUser = await createUser(
                { email: form.email, userName: form.userName, password: form.password },
                headers(user?.token)
            );

            if (newUser !== undefined) {
                console.log(newUser);
            }
        } else {
            toast.error("You must be logged in before taking this action!");
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <UsernameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />

            <hr className="mb-4" />

            <SelectInput id={"roles"} labelText={"Select a role"} />

            <TextInput id={"firstName"} labelText={"First Name"} placeholder={"Type the First Name here"} />
            <TextInput id={"lastName"} labelText={"Last Name"} placeholder={"Type the Last Name here"} />

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="userAvatar">
                    Profile picture
                </label>
                <input
                    className="block w-full p-2 text-sm text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 focus:outline-none dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="userAvatar"
                    type="file"
                />
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                    A profile picture is useful to confirm your are logged into your account
                </div>
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add New User
            </button>
        </form>
    );
};

export default CreateUserForm;
