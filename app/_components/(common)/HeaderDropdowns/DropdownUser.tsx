"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useAuthStore from "@/app/_stores/authStore";
import { IUser } from "@/app/_utils/interfaces";

import { CiSettings } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";

import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_utils/useExpandedElementsHandlers";
import ProfileImage from "../ProfileImage";
import SignOutButton from "../../(site)/Navbar/SignOutButton";
import ExpandedArrow from "../ExpandedArrow/ExpandedArrow";

const DropdownUser = () => {
    const { userProfile, removeUser } = useAuthStore();
    const [user, setUser] = useState<IUser | null | undefined>();

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useExpandedElementClickHandler({
        expandedElementRef: dropdown,
        triggerRef: trigger,
        isTargetOpen: dropdownOpen,
        setIsTargetOpen: setDropdownOpen,
    });
    useExpandedElementKeyHandler({ isTargetOpen: dropdownOpen, setIsTargetOpen: setDropdownOpen });

    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                href="#"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {user !== null && user !== undefined ? user.userName : "Unknown"}
                    </span>
                    <span className="block text-xs text-black dark:text-white">Admin</span>
                </span>

                <span className="h-10 w-10 rounded-full">
                    <ProfileImage user={user} />
                </span>

                <div className="hidden sm:block h-4 w-4">
                    <ExpandedArrow isOpen={dropdownOpen} />
                </div>
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62 flex-col rounded-md border border-stroke bg-white dark:bg-gray-700 shadow-default dark:border-strokedark dark:bg-boxdark ${
                    dropdownOpen === true ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col gap-2 border-b border-stroke px-3 py-4 dark:border-strokedark">
                    <li>
                        <Link
                            href="/profile"
                            className="flex items-center gap-4 text-sm text-black dark:text-white font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <div className="w-5">
                                <MdOutlinePersonOutline size={"100%"} />
                            </div>
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3.5 text-sm text-black dark:text-white font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <div className="w-5">
                                <CiSettings size={"100%"} />
                            </div>
                            <span>Account Settings</span>
                        </Link>
                    </li>
                </ul>

                {user !== null && user !== undefined && <SignOutButton />}
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default DropdownUser;
