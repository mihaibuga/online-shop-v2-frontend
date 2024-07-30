"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { createUser, headers } from "@/app/(private)/_services/UserService";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { userRoles } from "@/app/(private)/_utils/MockingData";

import SuccessAlert from "@/app/(private)/_components/Alerts/SuccessAlert/SuccessAlert";

import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";
import PasswordInput from "@/app/(private)/_components/Forms/FormFields/PasswordInput";
import SelectInput from "@/app/(private)/_components/Forms/FormFields/SelectField";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";

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

const CreateUserForm = (props: Props) => {
    const loggedInUser = useStoredUser();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        reset,
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const handleFormSubmit = async (form: FormInputs) => {
        if (loggedInUser?.token) {
            const newUser = await createUser(
                { email: form.email, userName: form.userName, password: form.password, role: form.role },
                headers(loggedInUser?.token)
            );

            if (newUser !== undefined) {
                toast.success(`The user with username '${newUser.userName}' has been created successfuly!`);
                setIsSubmitSuccessful(true);
                reset();
            } else {
                setIsSubmitSuccessful(false);
            }
        } else {
            toast.error("You must be logged in before taking this action!");
        }
    };

    return (
        <>
            <div>
                {isSubmitSuccessful === true && (
                    <SuccessAlert
                        alertLabelText={"Success!"}
                        alertBodyText={<>The new user has been created successfuly!</>}
                    />
                )}
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextInput
                    id={"username"}
                    labelText={"Username"}
                    placeholder={"Username"}
                    register={register}
                    errors={errors}
                />
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />

                <hr className="mb-4" />

                <SelectInput
                    id={"role"}
                    labelText={"Select a role"}
                    options={userRoles}
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

                <button
                    type="submit"
                    className={`text-white bg-blue-700 ${
                        !isDirty || !isValid ? "cursor-not-allowed opacity-50" : "hover:bg-blue-800"
                    } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    disabled={!isDirty || !isValid}
                >
                    {isSubmitting && (
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline mr-3 w-4 h-4 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            ></path>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    )}
                    Add New User
                </button>
            </form>
        </>
    );
};

export default CreateUserForm;
