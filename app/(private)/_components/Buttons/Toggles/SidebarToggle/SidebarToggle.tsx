import React from "react";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface IProps {
    isSidebarExpanded: boolean;
    toggleSidebarDisplay: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SidebarToggle = ({ isSidebarExpanded, toggleSidebarDisplay }: IProps) => {
    return (
        <button
            type="button"
            aria-controls="sidebar"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleSidebarDisplay}
        >
            <span className="sr-only">Open sidebar</span>
            <div className="w-5 h-5">{isSidebarExpanded ? <IoMdClose size={"100%"} /> : <FiMenu size={"100%"} />}</div>
        </button>
    );
};

export default SidebarToggle;
