"use client";

import React from "react";

import { IoMdCart } from "react-icons/io";

import useGeneralStore from "@/app/_stores/generalStore";
import { URL_PATHS } from "@/app/_utils/constants";
import { wishlistProducts } from "@/app/_utils/MockingData";

import ThemeToggle from "../../(common)/Toggles/ThemeToggle/ThemeToggle";
import SearchBar from "../../(common)/SearchBar/SearchBar";
import Logo from "../../(common)/Logo/Logo";
import SidebarToggle from "../../(common)/Toggles/SidebarToggle/SidebarToggle";
import HeaderActionButtonWrapper from "../../(common)/HeaderActionButtonWrapper/HeaderActionButtonWrapper";
import ButtonWithDropdown from "../../(common)/HeaderDropdowns/ButtonWithDropdown";
import DropdownTitle from "../../(common)/HeaderDropdowns/ButtonWithDropdown/DropdownTitle";
import SiteDropdownUser from "../../(common)/HeaderDropdowns/DropdownUser/SiteDropdownUser";

type Props = {};

const Navbar = (props: Props) => {
    const { isSidebarOpen, toggleSidebarDisplay } = useGeneralStore();

    return (
        <nav className="sticky z-20 top-0 start-0 bg-white border-gray-200 dark:bg-gray-900">
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
                                <DropdownTitle title={"Wishlist"} />

                                <ul className="flex max-h-80 h-auto flex-col overflow-y-auto">
                                    {wishlistProducts.map((product, index) => (
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

export default Navbar;
