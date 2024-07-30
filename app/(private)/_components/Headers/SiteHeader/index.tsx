"use client";

import React from "react";

import { IoMdCart } from "react-icons/io";

import useGeneralStore from "@/app/(private)/_stores/generalStore";
import { URL_PATHS } from "@/app/(private)/_utils/constants";
import { checkedOutProducts } from "@/app/(private)/_utils/MockingData";

import ThemeToggle from "@/app/(private)/_components/Buttons/Toggles/ThemeToggle/ThemeToggle";
import SearchBar from "@/app/(private)/_components/Others/SearchBar";
import Logo from "@/app/(private)/_components/Others/Logo";
import SidebarToggle from "@/app/(private)/_components/Buttons/Toggles/SidebarToggle/SidebarToggle";
import HeaderActionButtonWrapper from "@/app/(private)/_components/Headers/HeaderActionButtonWrapper/HeaderActionButtonWrapper";
import ButtonWithDropdown from "@/app/(private)/_components/Headers/HeaderDropdowns/ButtonWithDropdown";
import DropdownTitle from "@/app/(private)/_components/Headers/HeaderDropdowns/ButtonWithDropdown/DropdownTitle";
import SiteDropdownUser from "@/app/(private)/_components/Headers/HeaderDropdowns/DropdownUser/SiteDropdownUser";

type Props = {};

const SiteHeader = (props: Props) => {
    const { isSidebarOpen, toggleSidebarDisplay } = useGeneralStore();

    return (
        <nav className="sticky z-[35] top-0 start-0 bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">
                {/* Logo & Sidebar Toggle */}
                <div className="flex flex-row-reverse md:flex-row items-center justify-between gap-4 w-full md:w-fit">
                    <Logo linkPath={URL_PATHS.HOME.path} />
                    <SidebarToggle isSidebarExpanded={isSidebarOpen} toggleSidebarDisplay={toggleSidebarDisplay} />
                </div>

                {/* Search Box */}
                <div className="flex md:flex-[0.5] items-center justify-between flex w-full md:w-auto order-3 md:order-none">
                    <SearchBar />
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-center md:justify-between gap-4 w-full md:w-auto">
                    <HeaderActionButtonWrapper>
                        <ThemeToggle />
                    </HeaderActionButtonWrapper>

                    <HeaderActionButtonWrapper>
                        <ButtonWithDropdown icon={<IoMdCart size={"100%"} />}>
                            <>
                                <DropdownTitle title={"Checkout cart"} />

                                <ul className="flex max-h-80 h-auto flex-col overflow-y-auto">
                                    {checkedOutProducts.map((product, index) => (
                                        <li key={index}></li>
                                    ))}
                                </ul>
                            </>
                        </ButtonWithDropdown>
                    </HeaderActionButtonWrapper>

                    {/* User profile */}
                    <HeaderActionButtonWrapper>
                        <div className="flex items-center justify-center">
                            <SiteDropdownUser />
                        </div>
                    </HeaderActionButtonWrapper>
                </div>
            </div>
        </nav>
    );
};

export default SiteHeader;
