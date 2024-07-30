import React from "react";

import { UseFormRegister } from "react-hook-form";

interface IProps {
    register: UseFormRegister<any>;
    errors: any;
}

const EmailInput = ({ register, errors }: IProps) => {
    return (
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                {...register("email")}
            />
            {errors.email ? <p className="text-red-500">{errors.email.message}</p> : ""}
        </div>
    );
};

export default EmailInput;
