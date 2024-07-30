import React from "react";
import Link from "next/link";
import SidebarLinkGroup from "@/app/(private)/_components/Sidebars/SidebarLinkGroup";
import ExpandedArrow from "@/app/(private)/_components/(common)/ExpandedArrow/ExpandedArrow";
import { IExpandableMainNavLinkProps } from "@/app/(private)/_utils/interfaces";

const ExpandableMainNavLink = ({
    icon,
    title,
    mainHref,
    pathname,
    pathnameToCompare,
    pathnameIncludes,
    children,
}: IExpandableMainNavLinkProps) => {
    return (
        <SidebarLinkGroup activeCondition={pathname === pathnameToCompare || pathname.includes(pathnameIncludes)}>
            {(handleClick, open) => {
                return (
                    <>
                        <Link
                            href={mainHref}
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                (pathname === pathnameToCompare || pathname.includes(pathnameIncludes)) &&
                                "bg-graydark dark:bg-meta-4"
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick();
                            }}
                        >
                            <div className="w-5 h-5">{icon}</div>
                            <span>{title}</span>
                            <ExpandedArrow isOpen={open} />
                        </Link>
                        <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                {React.Children.map(children, (link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                );
            }}
        </SidebarLinkGroup>
    );
};

export default ExpandableMainNavLink;
