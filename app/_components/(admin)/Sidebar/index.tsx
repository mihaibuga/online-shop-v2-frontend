"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";

import { CiSettings } from "react-icons/ci";
import { MdOutlinePermMedia, MdOutlinePersonOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBox } from "react-icons/fa6";

import useGeneralStore from "@/app/_stores/generalStore";
import { URL_PATHS } from "@/app/_utils/constants";
import Logo from "../../(common)/Logo/Logo";
import SidebarCloseButton from "../../(common)/Buttons/SidebarCloseButton";
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
                    <MainLinksCategoryGroup>
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

                            <NavGroupSubLink
                                title={"Messages"}
                                linkPath={`${URL_PATHS.ADMIN.path}/messages`}
                                pathname={pathname}
                            />

                            <NavGroupSubLink
                                title={"Notifications"}
                                linkPath={`${URL_PATHS.ADMIN.path}/notifications`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>

                        <ExpandableMainNavLink
                            title={"Store"}
                            icon={<HiOutlineShoppingBag size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/store`}
                            pathnameIncludes={"store"}
                        >
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
                            </ExpandableMainNavLink>

                            <NavGroupSubLink
                                title={"Categories"}
                                linkPath={`${URL_PATHS.ADMIN.path}/taxonomies/categories`}
                                pathname={pathname}
                            />

                            <NavGroupSubLink
                                title={"Orders"}
                                linkPath={`${URL_PATHS.ADMIN.path}/orders`}
                                pathname={pathname}
                            />

                            <NavGroupSubLink
                                title={"Reviews"}
                                linkPath={`${URL_PATHS.ADMIN.path}/reviews`}
                                pathname={pathname}
                            />
                        </ExpandableMainNavLink>
                    </MainLinksCategoryGroup>

                    <MainLinksCategoryGroup groupTitle={"CONTENT"}>
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
                    </MainLinksCategoryGroup>

                    <MainLinksCategoryGroup groupTitle={"CONFIGURATION"}>
                        <ExpandableMainNavLink
                            title={"People"}
                            icon={<MdOutlinePersonOutline size={"100%"} />}
                            mainHref={"#"}
                            pathname={pathname}
                            pathnameToCompare={`${URL_PATHS.ADMIN.path}/people`}
                            pathnameIncludes={"people"}
                        >
                            <NavGroupSubLink
                                title={"All people"}
                                linkPath={`${URL_PATHS.ADMIN.path}/people`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Add User"}
                                linkPath={`${URL_PATHS.ADMIN.path}/people/new`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Permissions"}
                                linkPath={`${URL_PATHS.ADMIN.path}/people/permissions`}
                                pathname={pathname}
                            />
                            <NavGroupSubLink
                                title={"Roles"}
                                linkPath={`${URL_PATHS.ADMIN.path}/people/roles`}
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
