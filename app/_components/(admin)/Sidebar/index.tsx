"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";

import { CiSettings } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

import useGeneralStore from "@/app/_stores/generalStore";
import { URL_PATHS } from "@/app/_utils/constants";
import Logo from "../../(common)/Logo/Logo";
import SidebarCloseButton from "../../(common)/Buttons/SidebarCloseButton";
import SimpleMainNavLink from "./LinkTypes/SimpleMainNavLink";
import NavGroupSubLink from "./LinkTypes/NavGroupSubLink";
import ExpandableMainNavLink from "./LinkTypes/ExpandableMainNavLink";
import MainLinksCategoryGroup from "./MainLinksCategoryGroup";

const Sidebar = () => {
    const { isAdminSidebarOpen, toggleAdminSidebarDisplay } = useGeneralStore();

    const pathname = usePathname();
    const sidebar = useRef<any>(null);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-[26] flex h-screen w-72.5 flex-col overflow-y-hidden bg-white dark:bg-gray-700 rounded-br-3xl duration-300 border-r border-solid border-gray-200 dark:border-gray-900 ease-linear lg:static lg:translate-x-0 ${
                isAdminSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <div className="p-4 py-6 pl-6 border-b border-[#DDDDDD]">
                    <Logo linkPath={URL_PATHS.ADMIN.path} />
                </div>

                <SidebarCloseButton
                    sidebar={sidebar}
                    isSidebarExpanded={isAdminSidebarOpen}
                    toggleSidebarDisplay={toggleAdminSidebarDisplay}
                    additionalClasses={"block lg:hidden"}
                />
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6 text-[#222831] dark:text-[#EEEEEE]">
                    <MainLinksCategoryGroup groupTitle={"MENU"}>
                        <ExpandableMainNavLink
                            title={"Dashboard"}
                            icon={<RxDashboard size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={"/"}
                            pathnameIncludes={"dashboard"}
                        >
                            <NavGroupSubLink title={"eCommerce"} linkPath={"/"} pathname={pathname} />
                        </ExpandableMainNavLink>

                        <SimpleMainNavLink
                            title={"Profile"}
                            linkPath={"/profile"}
                            pathname={pathname}
                            icon={<MdOutlinePersonOutline size={"100%"} />}
                            pathnameIncludes={"profile"}
                        />

                        <SimpleMainNavLink
                            title={"Settings"}
                            linkPath={"/settings"}
                            pathname={pathname}
                            icon={<CiSettings size={"100%"} />}
                            pathnameIncludes={"settings"}
                        />
                    </MainLinksCategoryGroup>

                    <MainLinksCategoryGroup groupTitle={"OTHERS"}>
                        <ExpandableMainNavLink
                            title={"UI Elements"}
                            icon={<LuLayoutDashboard size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={"/ui"}
                            pathnameIncludes={"ui"}
                        >
                            <NavGroupSubLink title={"Alerts"} linkPath={"/ui/alerts"} pathname={pathname} />
                            <NavGroupSubLink title={"Buttons"} linkPath={"/ui/buttons"} pathname={pathname} />
                        </ExpandableMainNavLink>
                    </MainLinksCategoryGroup>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
