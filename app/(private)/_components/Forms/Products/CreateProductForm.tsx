"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { headers } from "@/app/(private)/_utils/api";
import { createProduct } from "@/app/(private)/_services/ProductService";

import SuccessAlert from "@/app/(private)/_components/Alerts/SuccessAlert/SuccessAlert";
import TextInput from "@/app/(private)/_components/Forms/FormFields/TextInput";
import SubmitButton from "@/app/(private)/_components/Buttons/SubmitButton";

type Props = {};

type FormInputs = {
    name: string;
    description?: string | undefined;
    price: number;
    isEnabled?: boolean | undefined;
    productImages?: any | undefined;
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("The product's name is required"),
    description: Yup.string(),
    price: Yup.number().required("The price is required"),
    isEnabled: Yup.boolean(),
    productImages: Yup.mixed()
        .test("fileType", "Not a valid image type", (value: any) => {
            if (value && value.length > 0) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].type != "image/png" && value[i].type != "image/jpg" && value[i].type != "image/jpeg") {
                        return false;
                    }
                }
            }
            return true;
        })
        .test("fileSize", "Max allowed size is 2GB", (value: any) => {
            if (value && value?.length > 0) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > 2147483648) {
                        return false;
                    }
                }
            }
            return true;
        }),
});

const CreateProductForm = (props: Props) => {
    const user = useStoredUser();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        reset,
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const handleFormSubmit = async (form: FormInputs) => {
        if (user?.token) {
            const formData = new FormData();

            formData.append("name", form.name);
            if (form.description) {
                formData.append("description", form.description);
            }
            formData.append("isEnabled", JSON.stringify(form.isEnabled));
            formData.append("price", JSON.stringify(form.price));

            for (var i = 0; i != form.productImages.length; i++) {
                formData.append("productImages", form.productImages[i]);
            }

            const newProduct = await createProduct(formData, headers(user?.token));

            if (newProduct !== undefined) {
                toast.success(`The product has been created successfuly!`);
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
                        alertBodyText={<>The new product has been created successfuly!</>}
                    />
                )}
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextInput
                    id={"name"}
                    labelText={"Name"}
                    placeholder={"Type the Name here"}
                    register={register}
                    errors={errors}
                />

                <TextInput
                    id={"description"}
                    labelText={"Description"}
                    placeholder={"Type the Description here"}
                    register={register}
                    errors={errors}
                />

                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Type the Price here"
                        {...register("price")}
                    />
                    {errors.price ? <p className="text-red-500">{errors.price.message}</p> : ""}
                </div>

                <div>
                    <label htmlFor="isEnabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Is the product enabled?
                    </label>
                    <input
                        type="checkbox"
                        id="isEnabled"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        checked={isEnabled}
                        onClick={() => setIsEnabled((prev) => !prev)}
                        {...register("isEnabled")}
                    />
                    {errors.price ? <p className="text-red-500">{errors.price.message}</p> : ""}
                </div>

                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="productImages"
                    >
                        Product image(s)
                    </label>
                    <input
                        className="block w-full p-2 text-sm text-gray-900 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 focus:outline-none dark:placeholder-gray-400"
                        aria-describedby="product_images_help"
                        id="productImages"
                        type="file"
                        multiple
                        {...register("productImages")}
                    />
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="product_images_help">
                        A collection of images is useful to display the physical features of the product.
                    </div>
                </div>

                <hr className="mb-4" />

                <SubmitButton
                    isDisabled={!isDirty || !isValid}
                    isSubmitting={isSubmitting}
                    defaultText={"Add New Product"}
                />
            </form>
        </>
    );
};

export default CreateProductForm;
