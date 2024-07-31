import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";

import SubmitButton from "@/app/(private)/_components/Buttons/SubmitButton";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import EmailInput from "@/app/(private)/_components/Forms/FormFields/EmailInput";

type Props = {};

type FormInputs = {
    siteTitle: string;
    email: string;
};

const validationSchema = Yup.object().shape({
    siteTitle: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
});

const GeneralSettingsForm = (props: Props) => {
    const [savingSettings, setSavingSettings] = useState<boolean>(false);
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
            siteTitle: "",
            email: "",
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
            <TextInput
                id={"siteTitle"}
                labelText={"Site Title"}
                placeholder={"Site Title"}
                register={register}
                errors={errors}
            />
            <EmailInput
                id={"siteEmail"}
                labelText={"Administration Email Address"}
                placeholder={"Admin Email"}
                register={register}
                errors={errors}
            />

            <SubmitButton
                isDisabled={!isDirty || !isValid}
                isSubmitting={savingSettings}
                defaultText={"Save Changes"}
                textWhileSubmitting={"Saving Changes"}
            />
        </form>
    );
};

export default GeneralSettingsForm;
