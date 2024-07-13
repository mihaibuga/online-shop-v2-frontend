import { IHeaderUserDropdownLink } from "@/app/_utils/interfaces";
import Link from "next/link";
import React from "react";

const SimpleLink = ({ path, label, icon, hoverColorName }: IHeaderUserDropdownLink) => {
    return (
        <Link
            className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white gap-1 hover:bg-gray-100 dark:hover:bg-gray-600"
            href={path}
        >
            <div className={`${hoverColorName && `group-hover:text-${hoverColorName}-700 group-hover:dark:text-${hoverColorName}-500 `}w-6 h-6 group-hover:scale-110`}>
                {icon}
            </div>
            <span>{label}</span>
        </Link>
    );
};

export default SimpleLink;
