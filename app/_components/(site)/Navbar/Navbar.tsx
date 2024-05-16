"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

import ThemeToggle from "../../(common)/Toggles/ThemeToggle/ThemeToggle";
import SearchBar from "../../(common)/SearchBar/SearchBar";
import useGeneralStore from "@/app/_stores/generalStore";
import useAuthStore from "@/app/_stores/authStore";
import { URL_PATHS } from "@/app/_utils/constants";
import { IUser } from "@/app/_utils/interfaces";
import SignOutButton from "../../(common)/Buttons/SignOutButton";
import Logo from "../../(common)/Logo/Logo";
import SidebarToggle from "../../(common)/Toggles/SidebarToggle/SidebarToggle";
import HeaderActionButtonWrapper from "../../(common)/HeaderActionButtonWrapper/HeaderActionButtonWrapper";
import ProfileImage from "../../(common)/ProfileImage";
import ButtonWithDropdown from "../../(common)/HeaderDropdowns/ButtonWithDropdown";
import DropdownTitle from "../../(common)/HeaderDropdowns/ButtonWithDropdown/DropdownTitle";
import { wishlistProducts } from "@/app/_utils/MockingData";

type Props = {};

const Navbar = (props: Props) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null | undefined>();
    const { isSidebarOpen, toggleSidebarDisplay } = useGeneralStore();
    const { userProfile } = useAuthStore();

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    const handleUserMenuDisplay = () => {
        setIsUserMenuOpen((prev) => !prev);
    };

    return (
        <nav className="sticky z-10 top-0 start-0 bg-white border-gray-200 dark:bg-gray-900">
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
                            <button
                                type="button"
                                className="flex h-6 w-6 text-sm dark:text-[#FFFFFF] dark:bg-gray-800 bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative hover:scale-110 duration-200"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                                onClick={handleUserMenuDisplay}
                            >
                                <span className="sr-only">Open user menu</span>
                                <ProfileImage user={user} />
                            </button>

                            <div
                                className={`z-15 ${
                                    isUserMenuOpen ? "" : "hidden"
                                } my-4 w-max text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-[-5px] md:right-0 overflow-hidden`}
                                id="user-dropdown"
                            >
                                <div className="">
                                    {user !== null && user !== undefined ? (
                                        <>
                                            <span className="block px-4 py-2 text-sm text-gray-900 dark:text-white">
                                                {user.userName}
                                            </span>
                                        </>
                                    ) : (
                                        <div className="flex flex-col">
                                            <Link
                                                href={URL_PATHS.LOGIN.path}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                {URL_PATHS.LOGIN.label}
                                            </Link>
                                            <Link
                                                href={URL_PATHS.SIGNUP.path}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                {URL_PATHS.SIGNUP.label}
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link
                                            href={URL_PATHS.MY_ACCOUNT.path}
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            {URL_PATHS.MY_ACCOUNT.label}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white gap-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                                            href={URL_PATHS.ORDERS.path}
                                        >
                                            <div className="group-hover:text-blue-700 group-hover:dark:text-blue-500 w-6 h-6 group-hover:scale-110">
                                                <IoMdCart size={"100%"} />
                                            </div>
                                            <span>{URL_PATHS.ORDERS.label}</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white gap-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                                            href={URL_PATHS.WISHLIST.path}
                                        >
                                            <div className="group-hover:text-[#D80032] group-hover:dark:text-red-500 w-6 h-6 group-hover:scale-110">
                                                <MdFavorite size={"100%"} />
                                            </div>
                                            <span>{URL_PATHS.WISHLIST.label}</span>
                                        </Link>
                                    </li>

                                    <li>{user !== null && user !== undefined && <SignOutButton />}</li>
                                </ul>
                            </div>
                        </div>
                    </HeaderActionButtonWrapper>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
