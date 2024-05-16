"use client";

import SidebarToggle from "../../(common)/Toggles/SidebarToggle/SidebarToggle";

import ThemeToggle from "../../(common)/Toggles/ThemeToggle/ThemeToggle";
import DropdownMessage from "../../(common)/HeaderDropdowns/DropdownMessages/DropdownMessage";
import DropdownNotification from "../../(common)/HeaderDropdowns/DropdownNotifications/DropdownNotification";
import DropdownUser from "../../(common)/HeaderDropdowns/DropdownUser";
import SearchBar from "../../(common)/SearchBar/SearchBar";
import Logo from "../../(common)/Logo/Logo";
import { URL_PATHS } from "@/app/_utils/constants";

const Header = () => {
    return (
        <header className="sticky top-0 z-[25] flex w-full bg-white dark:bg-gray-900 drop-shadow-1 dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <SidebarToggle />
                    <Logo linkPath={URL_PATHS.ADMIN.path} />
                </div>

                <div className="hidden sm:block">
                    <SearchBar />
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <li className="relative">
                            <ThemeToggle />
                        </li>

                        <li className="relative">
                            <DropdownNotification />
                        </li>

                        <li className="relative">
                            <DropdownMessage />
                        </li>
                    </ul>

                    <DropdownUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
