import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
    register: UseFormRegister<any>;
    errors: any;
    id: string;
    labelText: string;
    options: string[];
}

const SelectInput = ({ register, errors, id, labelText, options }: IProps) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {labelText}
            </label>
            <select
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register(id)}
            >
                {options.map((option, index) => {
                    return <option key={index} value={option.toLowerCase()}>{option}</option>;
                })}
            </select>
            {errors.id ? <p className="text-red-500">{errors.id.message}</p> : ""}
        </div>
    );
};

export default SelectInput;
