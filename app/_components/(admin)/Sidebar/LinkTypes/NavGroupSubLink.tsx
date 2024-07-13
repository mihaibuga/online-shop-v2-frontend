import { INavGroupSubLinkProps } from "@/app/_utils/interfaces";
import Link from "next/link";
import React from "react";

const NavGroupSubLink = ({ title, linkPath, pathname }: INavGroupSubLinkProps) => {
    return (
        <Link
            href={linkPath}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:bg-gray-300 ${
                pathname === linkPath ? "text-black bg-gray-300" : "text-bodydark2"
            }`}
        >
            {title}
        </Link>
    );
};

export default NavGroupSubLink;
