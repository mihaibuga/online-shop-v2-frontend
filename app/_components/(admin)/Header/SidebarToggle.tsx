import React from "react";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import useGeneralStore from "@/app/_stores/generalStore";

type Props = {};

const SidebarToggle = (props: Props) => {
    const { isAdminSidebarOpen, toggleAdminSidebarDisplay } = useGeneralStore();

    return (
        <button
            aria-controls="sidebar"
            onClick={(e) => {
                e.stopPropagation();
                toggleAdminSidebarDisplay();
            }}
            className="z-[25] block lg:hidden rounded-sm border border-stroke dark:border-strokedark bg-white dark:bg-boxdark p-1.5 shadow-sm"
        >
            <div className="w-5 h-5">{isAdminSidebarOpen ? <IoMdClose size={"100%"} /> : <FiMenu size={"100%"} />}</div>
        </button>
    );
};

export default SidebarToggle;
