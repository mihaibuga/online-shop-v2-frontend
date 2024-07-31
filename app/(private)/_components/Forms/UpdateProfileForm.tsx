"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";

import SubmitButton from "@/app/(private)/_components/Buttons/SubmitButton";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";
import PasswordInput from "@/app/(private)/_components/Forms/FormFields/PasswordInput";

type Props = {};

type FormInputs = {
    email: string;
    userName: string;
    password: string;
    role: string;
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("Role is required"),
});

const UpdateProfileForm = (props: Props) => {
    const [savingProfile, setSavingProfile] = useState<boolean>(false);
    const loggedInUser = useStoredUser();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

    // Default values

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        reset,
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: "",
            userName: "",
            role: "",
            password: "",
        },
    });

    const handleFormSubmit = async (form: FormInputs) => {
        if (loggedInUser?.token) {
            console.log(form);
        } else {
            toast.error("You must be logged in before taking this action!");
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className=" space-y-2 md:space-y-4">
            <div className="space-y-2 md:space-y-4">
                <h2>Name</h2>
                <TextInput
                    id={"username"}
                    labelText={"Username"}
                    placeholder={"Username"}
                    register={register}
                    errors={errors}
                />
                <TextInput
                    id={"firstName"}
                    labelText={"First Name"}
                    placeholder={"Type the First Name here"}
                    register={register}
                    errors={errors}
                />
                <TextInput
                    id={"lastName"}
                    labelText={"Last Name"}
                    placeholder={"Type the Last Name here"}
                    register={register}
                    errors={errors}
                />
            </div>

            <div className="space-y-2 md:space-y-4">
                <h2>Contact Info</h2>
                <EmailInput register={register} errors={errors} />
            </div>

            <div className="space-y-2 md:space-y-4">
                <h2>About Yourself</h2>
                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="userAvatar"
                    >
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
            </div>

            <div className="space-y-2 md:space-y-4">
                <h2>Account Management</h2>
                <PasswordInput register={register} errors={errors} />
            </div>

            <SubmitButton
                isDisabled={!isDirty || !isValid}
                isSubmitting={savingProfile}
                defaultText={"Update Profile"}
            />
        </form>
    );
};

export default UpdateProfileForm;
