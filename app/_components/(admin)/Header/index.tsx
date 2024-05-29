"use client";

import { URL_PATHS } from "@/app/_utils/constants";
import useGeneralStore from "@/app/_stores/generalStore";

import SidebarToggle from "../../(common)/Toggles/SidebarToggle/SidebarToggle";
import ThemeToggle from "../../(common)/Toggles/ThemeToggle/ThemeToggle";
import DropdownMessage from "../../(common)/HeaderDropdowns/DropdownMessages/DropdownMessage";
import DropdownNotification from "../../(common)/HeaderDropdowns/DropdownNotifications/DropdownNotification";
import DropdownUser from "../../(common)/HeaderDropdowns/DropdownUser/AdminDropdownUser";
import SearchBar from "../../(common)/SearchBar/SearchBar";
import Logo from "../../(common)/Logo/Logo";
import HeaderActionButtonWrapper from "../../(common)/HeaderActionButtonWrapper/HeaderActionButtonWrapper";

const Header = () => {
    const { isAdminSidebarOpen, toggleAdminSidebarDisplay } = useGeneralStore();

    return (
        <header className="sticky top-0 z-[25] flex w-full bg-white dark:bg-gray-900 drop-shadow-1 dark:drop-shadow-none">
            <div className="flex flex-wrap md:flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 gap-4 md:gap-0">
                {/* Logo & Sidebar Toggle */}
                <div className="flex items-center w-full md:w-fit gap-2 sm:gap-4 lg:hidden">
                    <SidebarToggle
                        isSidebarExpanded={isAdminSidebarOpen}
                        toggleSidebarDisplay={toggleAdminSidebarDisplay}
                    />
                    <Logo linkPath={URL_PATHS.ADMIN.path} />
                </div>

                {/* Search Box */}
                <div className="flex items-center w-full md:w-auto order-3 md:order-none justify-between">
                    <SearchBar />
                </div>

                {/* Action buttons */}
                <div className="flex items-center w-full md:w-auto gap-3 2xsm:gap-7 justify-center md:justify-normal">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <li className="relative">
                            <HeaderActionButtonWrapper>
                                <ThemeToggle />
                            </HeaderActionButtonWrapper>
                        </li>

                        <li className="relative">
                            <HeaderActionButtonWrapper>
                                <DropdownNotification />
                            </HeaderActionButtonWrapper>
                        </li>

                        <li className="relative">
                            <HeaderActionButtonWrapper>
                                <DropdownMessage />
                            </HeaderActionButtonWrapper>
                        </li>
                    </ul>

                    <DropdownUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
