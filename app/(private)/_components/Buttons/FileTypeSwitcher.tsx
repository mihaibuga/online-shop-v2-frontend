import React from "react";

type Props = {
    isSelected: boolean;
    buttonText: string;
};

const FileTypeSwitcher = ({isSelected, buttonText}: Props) => {
    const commonStyles = "border bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:bg-gray-900";
    const normalStyles = "text-gray-900 border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800";
    const selectedStyles = "text-blue-700 hover:text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800";

    return (
        <button
            type="button"
            className={`${commonStyles} ${isSelected ? selectedStyles : normalStyles}`}
        >
            {buttonText}
        </button>
    );
};

export default FileTypeSwitcher;
