"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { createUser } from "@/app/(private)/_services/UserService";
import { headers } from "@/app/(private)/_utils/api";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { userRoles } from "@/app/(private)/_utils/DummyData";

import SuccessAlert from "@/app/(private)/_components/Alerts/SuccessAlert/SuccessAlert";

import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";
import PasswordInput from "@/app/(private)/_components/Forms/FormFields/PasswordInput";
import SelectField from "@/app/(private)/_components/Forms/FormFields/SelectField";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import AddNewUserButton from "@/app/(private)/_components/Buttons/AddNewUserButton";

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

                <SelectField
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

                <AddNewUserButton isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting} />
            </form>
        </>
    );
};

export default CreateUserForm;
