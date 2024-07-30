"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { headers } from "@/app/(private)/_services/UserService";
import { createProduct } from "@/app/(private)/_services/ProductService";

import SuccessAlert from "@/app/(private)/_components/(common)/Alerts/SuccessAlert/SuccessAlert";
import TextInput from "@/app/(private)/_components/AuthForm/FormFields/TextInput";

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

            const newProduct = await createProduct(
                formData,
                headers(user?.token)
            );

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

                {/* <SelectInput
                    id={"isEnabled"}
                    labelText={"Is the product enabled?"}
                    options={["Yes", "No"]}
                    register={register}
                    errors={errors}
                /> */}

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
                    Add New Product
                </button>
            </form>
        </>
    );
};

export default CreateProductForm;
