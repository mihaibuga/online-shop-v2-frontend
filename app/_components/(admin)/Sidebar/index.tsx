"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";

import { CiSettings } from "react-icons/ci";
import { MdOutlinePermMedia, MdOutlinePersonOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { PiBellLight } from "react-icons/pi";
import { FaBox } from "react-icons/fa6";

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
                            <NavGroupSubLink title={"Home"} linkPath={URL_PATHS.ADMIN.path} pathname={pathname} />
                            <NavGroupSubLink
                                title={"Updates"}
                                linkPath={`${URL_PATHS.ADMIN.path}/updates`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>
                    </MainLinksCategoryGroup>

                    <MainLinksCategoryGroup groupTitle={"ENTITY TYPES"}>
                        <ExpandableMainNavLink
                            title={"New"}
                            icon={<IoMdAdd size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={"/create"}
                            pathnameIncludes={"create"}
                        >
                            <NavGroupSubLink
                                title={"User"}
                                linkPath={`${URL_PATHS.ADMIN.path}/users/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Page"}
                                linkPath={`${URL_PATHS.ADMIN.path}/pages/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Media"}
                                linkPath={`${URL_PATHS.ADMIN.path}/media/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Product"}
                                linkPath={`${URL_PATHS.ADMIN.path}/products/new`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>

                        <ExpandableMainNavLink
                            title={"Products"}
                            icon={<FaBox size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/products`}
                            pathnameIncludes={"products"}
                        >
                            <NavGroupSubLink
                                title={"All Products"}
                                linkPath={`${URL_PATHS.ADMIN.path}/products`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Add New Product"}
                                linkPath={`${URL_PATHS.ADMIN.path}/products/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Categories"}
                                linkPath={`${URL_PATHS.ADMIN.path}/taxonomies/categories`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>

                        <ExpandableMainNavLink
                            title={"Media"}
                            icon={<MdOutlinePermMedia size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/media`}
                            pathnameIncludes={"media"}
                        >
                            <NavGroupSubLink
                                title={"Library"}
                                linkPath={`${URL_PATHS.ADMIN.path}/media`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Add New Media File"}
                                linkPath={`${URL_PATHS.ADMIN.path}/media/new`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>

                        <SimpleMainNavLink
                            title={"Messages"}
                            linkPath={`${URL_PATHS.ADMIN.path}/messages`}
                            pathname={pathname}
                            icon={<AiOutlineMessage size={"100%"} />}
                            pathnameIncludes={"messages"}
                        />

                        <SimpleMainNavLink
                            title={"Notifications"}
                            linkPath={`${URL_PATHS.ADMIN.path}/notifications`}
                            pathname={pathname}
                            icon={<PiBellLight size={"100%"} />}
                            pathnameIncludes={"notifications"}
                        />
                    </MainLinksCategoryGroup>

                    <MainLinksCategoryGroup groupTitle={"CONFIGURATION"}>
                        <ExpandableMainNavLink
                            title={"Users"}
                            icon={<MdOutlinePersonOutline size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/users`}
                            pathnameIncludes={"users"}
                        >
                            <NavGroupSubLink
                                title={"All Users"}
                                linkPath={`${URL_PATHS.ADMIN.path}/users`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Add New User"}
                                linkPath={`${URL_PATHS.ADMIN.path}/users/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Profile"}
                                linkPath={`${URL_PATHS.ADMIN.path}/users/profile`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>

                        <ExpandableMainNavLink
                            title={"Settings"}
                            icon={<CiSettings size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/settings`}
                            pathnameIncludes={"settings"}
                        >
                            <NavGroupSubLink
                                title={"General"}
                                linkPath={`${URL_PATHS.ADMIN.path}/settings/general`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>
                    </MainLinksCategoryGroup>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
