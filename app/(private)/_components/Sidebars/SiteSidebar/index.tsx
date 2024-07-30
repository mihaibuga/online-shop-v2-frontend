"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

import useGeneralStore from "@/app/(private)/_stores/generalStore";
import { URL_PATHS } from "@/app/(private)/_utils/constants";

import SidebarCloseButton from "@/app/(private)/_components/Buttons/SidebarCloseButton";
import Logo from "@/app/(private)/_components/Others/Logo";

const SiteSidebar = () => {
    const { isSidebarOpen, toggleSidebarDisplay, closeSiteSidebar } = useGeneralStore();

    const sidebar = useRef<any>(null);

    useEffect(() => {
        closeSiteSidebar();
        window.addEventListener("resize", closeSiteSidebar);
    }, []);

    return (
        <div>
            <div
                data-sidebar-expanded={isSidebarOpen}
                className={`sidebar bg-white dark:bg-gray-700 z-[37] ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-80"
                } h-full border-gray-100 fixed duration-300 top-0 rounded-r-3xl`}
            >
                <SidebarCloseButton
                    sidebar={sidebar}
                    isSidebarExpanded={isSidebarOpen}
                    toggleSidebarDisplay={toggleSidebarDisplay}
                />

                <div className="content xl:w-400 w-80 flex flex-col justify-start mb-10 overflow-hidden gap-2">
                    <div className="py-6  p-4 pl-6 border-b border-[#DDDDDD]">
                        <Logo linkPath={URL_PATHS.HOME.path} />
                    </div>

                    <div className="categories pb-3 p-4 pl-6">
                        <div className="dark:text-[#FFFFFF]">All categories</div>
                        <div className="list-container flex flex-col w-full ">
                            <Link href={URL_PATHS.HOME.path}>
                                <div className="flex items-center gap-3 hover:bg-primary p-3 xl:justify-start cursor-pointer font-semibold text-[#30475E] dark:text-[#EEEEEE] rounded-lg">
                                    <p className="text-2xl">
                                        <AiFillHome />
                                    </p>
                                    <span className="text-xl">Home</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isSidebarOpen && (
                <div className="bg-[#222831] bg-opacity-75 w-full h-[calc(100%_+_182px)] md:h-[calc(100%_+_72px)] absolute -top-[182px] md:-top-[72px] z-[36]"></div>
            )}
        </div>
    );
};

export default SiteSidebar;
