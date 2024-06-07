import React from "react";

import { userRoles } from "@/app/_utils/MockingData";

interface IProps {
    id: string;
    labelText: string;
}

const SelectInput = ({ id, labelText }: IProps) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {labelText}
            </label>
            <select
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {userRoles.map((option, index) => {
                    return <option key={index}>{option}</option>;
                })}
            </select>
        </div>
    );
};

export default SelectInput;
