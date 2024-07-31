import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { CgProfile } from "react-icons/cg";
import { userRoles } from "@/app/(private)/_utils/DummyData";
import { IUser } from "@/app/(private)/_utils/interfaces";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";

import SubmitButton from "@/app/(private)/_components/Buttons/SubmitButton";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";
import SelectField from "@/app/(private)/_components/Forms/FormFields/SelectField"

type Props = {
    initialUserDetails: IUser;
};

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

const EditUserForm = ({ initialUserDetails }: Props) => {
    const [savingUserDetails, setSavingUserDetails] = useState<boolean>(false);
    const loggedInUser = useStoredUser();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        reset,
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: initialUserDetails.email,
            userName: initialUserDetails.userName,
            role: initialUserDetails.role,
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
        <form onSubmit={handleSubmit(handleFormSubmit)} className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                {initialUserDetails.profileImage ? (
                    <>
                        <div className={`w-${40} h-${40} relative`}>
                            <Image
                                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                src={initialUserDetails.profileImage}
                                alt="Bordered user avatar"
                                quality={100}
                                fill
                                priority
                                sizes="100%"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>

                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button
                                type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                            >
                                Change picture
                            </button>
                            <button
                                type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                            >
                                Delete picture
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={`w-${40} h-${40}`}>
                        <CgProfile size={"100%"} />
                    </div>
                )}
            </div>

            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
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

                <div className="mb-2 sm:mb-6">
                    <EmailInput register={register} errors={errors} />
                </div>

                <div className="mb-2 sm:mb-6">
                    <TextInput
                        id={"username"}
                        labelText={"Username"}
                        placeholder={"Username"}
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="mb-2 sm:mb-6">
                    <SelectField
                    id={"role"}
                    labelText={"Select a role"}
                    options={userRoles}
                    register={register}
                    errors={errors}
                />
                </div>

                <div className="flex justify-end">
                    <SubmitButton
                        isDisabled={false}
                        isSubmitting={savingUserDetails}
                        defaultText={"Save"}
                        textWhileSubmitting={"Saving"}
                    />
                </div>
            </div>
        </form>
    );
};

export default EditUserForm;
