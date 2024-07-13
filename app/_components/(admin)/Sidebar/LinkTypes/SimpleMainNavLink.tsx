import React from "react";
import Link from "next/link";
import { ISimpleMainNavLinkProps } from "@/app/_utils/interfaces";

const SimpleMainNavLink = ({ title, linkPath, pathname, icon, pathnameIncludes }: ISimpleMainNavLinkProps) => {
    return (
        <Link
            href={linkPath}
            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes(pathnameIncludes) && "bg-graydark dark:bg-meta-4"
            }`}
        >
            <div className="w-5 h-5">{icon}</div>
            <span>{title}</span>
        </Link>
    );
};

export default SimpleMainNavLink;
