import { INavGroupSubLinkProps } from "@/app/_utils/interfaces";
import Link from "next/link";
import React from "react";

const NavGroupSubLink = ({ title, linkPath, pathname }: INavGroupSubLinkProps) => {
    return (
        <Link
            href={linkPath}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                pathname === linkPath && "text-white"
            }`}
        >
            {title}
        </Link>
    );
};

export default NavGroupSubLink;
