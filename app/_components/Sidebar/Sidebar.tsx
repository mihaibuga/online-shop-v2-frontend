"use client";

import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import useGeneralStore from "@/app/_stores/generalStore";
import { BsShop } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebarDisplay } = useGeneralStore();

    return (
        <div>
            <div
                className={`sidebar bg-white dark:bg-[#212933] z-[23] ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-80"
                } h-full border-gray-100 fixed duration-300 top-0 rounded-r-3xl`}
            >
                {/* Main Menu Toggle */}
                <button
                    type="button"
                    className="absolute top-2 right-2 text-[#222831] dark:text-[#EEEEEE] bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:text-[#222831] rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center z-25"
                    data-modal-hide="default-modal"
                    onClick={toggleSidebarDisplay}
                >
                    <div className="w-8 h-8">
                        <IoMdClose size={"100%"} />
                    </div>
                </button>

                <div className="content xl:w-400 w-80 flex flex-col justify-start mb-10 overflow-hidden gap-2">
                    {/* Logo */}
                    <div className="py-6  p-4 pl-6 border-b border-[#DDDDDD]">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse relative w-[85%]">
                            <div className="w-full max-w-7 md:w-7 h-full md:h-7">
                                <BsShop size={"100%"} />
                            </div>
                            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Storify
                            </span>
                        </Link>
                    </div>

                    <div className="categories pb-3 p-4 pl-6">
                        <div>All categories</div>
                        <div className="list-container flex flex-col w-full ">
                            <Link href="/">
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
            {isSidebarOpen && <div className="bg-[#222831] bg-opacity-75 w-full h-[100vh] absolute -top-[182px] md:-top-[72px] z-[21]"></div>}
        </div>
    );
};

export default Sidebar;
