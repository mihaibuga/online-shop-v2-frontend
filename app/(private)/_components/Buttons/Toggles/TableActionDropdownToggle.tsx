import React from "react";
import ExpandedArrow from "@/app/(private)/_components/Others/ExpandedArrow";

type Props = {
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    isActionItemsDropdownVisible: boolean;
};

const TableActionDropdownToggle = ({ clickHandler, isActionItemsDropdownVisible }: Props) => {
    return (
        <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={clickHandler}
        >
            <span className="sr-only">Action button</span>
            <span>Action</span>
            <ExpandedArrow isOpen={isActionItemsDropdownVisible} additionalClasses="w-2.5 h-2.5 ms-2.5" />
        </button>
    );
};

export default TableActionDropdownToggle;
