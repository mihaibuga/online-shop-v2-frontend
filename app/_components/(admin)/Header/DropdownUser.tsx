"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useAuthStore from "@/app/_stores/authStore";
import { IUser } from "@/app/_utils/interfaces";

import { CiSettings } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";

import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_utils/useExpandedElementsHandlers";
import ProfileImage from "../../(common)/ProfileImage";
import SignOutButton from "../../Navbar/SignOutButton";

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

                <svg
                    className="hidden sm:block fill-current"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                        fill=""
                    />
                </svg>
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    dropdownOpen === true ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col gap-2 border-b border-stroke px-3 py-4 dark:border-strokedark">
                    <li>
                        <Link
                            href="/profile"
                            className="flex items-center gap-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
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
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
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
