"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { googleLogout } from "@react-oauth/google";
import Image from "next/image";

import { AiOutlineLogout } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SearchBar from "../SearchBar/SearchBar";
import useGeneralStore from "@/app/_stores/generalStore";
import useAuthStore from "@/app/_stores/authStore";
import { STORE_NAME, URL_PATHS } from "@/app/_utils/constants";
import { IUser } from "@/app/_utils/interfaces";

type Props = {};

const Navbar = (props: Props) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null | undefined>();
    const { toggleSidebarDisplay } = useGeneralStore();
    const { userProfile, removeUser } = useAuthStore();

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    const handleUserMenuDisplay = () => {
        setIsUserMenuOpen((prev) => !prev);
    };

    return (
        <nav className="sticky z-10 top-0 start-0 bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">
                <div className="flex flex-row-reverse md:flex-row items-center justify-between gap-4 w-full md:w-fit">
                    {/* Logo */}
                    <Link
                        href={URL_PATHS.HOME.path}
                        className="flex items-center w-fit justify-around gap-2 space-x-3 rtl:space-x-reverse relative flex-row-reverse md:flex-row"
                    >
                        <div className="w-full max-w-7 md:w-7 h-full md:h-7 hidden md:block dark:text-[#FFFFFF]">
                            <BsShop size={"100%"} />
                        </div>
                        <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white !ml-0 md:ml-3">
                            {STORE_NAME}
                        </span>
                    </Link>

                    {/* Main Menu Toggle */}
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                        aria-expanded="false"
                        onClick={toggleSidebarDisplay}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="w-5 h-5">
                            <FiMenu size={"100%"} />
                        </div>
                    </button>
                </div>

                {/* Menu Links */}
                <div className="flex md:flex-[0.5] items-center justify-between flex w-full md:w-auto order-3 md:order-none">
                    <SearchBar />
                </div>

                <div className="flex items-center justify-center md:justify-between gap-4 w-full md:w-auto">
                    <ThemeToggle />

                    <Link
                        className="flex items-center bg-slate-200 dark:bg-[#212933] p-2 rounded-md dark:text-[#FFFFFF] hover:text-blue-700"
                        href={URL_PATHS.CHECKOUT.path}
                    >
                        <div className="w-6 h-6 hover:scale-110 duration-200">
                            <IoMdCart size={"100%"} />
                        </div>
                        <span className="flex absolute -mt-5 ml-4">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </Link>

                    {/* User profile */}
                    <div className="flex items-center justify-center bg-slate-200 dark:bg-[#212933] p-2 rounded-md relative">
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
                            {user !== null && user !== undefined ? (
                                <Image
                                    className="rounded-full cursor-pointer"
                                    src={user.profileImage}
                                    alt="user"
                                    width={40}
                                    height={40}
                                />
                            ) : (
                                <CgProfile size={"100%"} />
                            )}
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

                                {user !== null && user !== undefined && (
                                    <button
                                        type="button"
                                        className="group flex items-center justify-center px-4 py-2 cursor-pointer outline-none text-sm gap-1"
                                        onClick={() => {
                                            googleLogout();
                                            removeUser();
                                        }}
                                    >
                                        <div className="w-6 h-6 group-hover:scale-110">
                                            <AiOutlineLogout size={"100%"} color="red" />
                                        </div>
                                        <span>Sign out</span>
                                    </button>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
