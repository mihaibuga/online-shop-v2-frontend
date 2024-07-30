"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { MdOutlinePersonOutline } from "react-icons/md";

import {
    useExpandedElementClickHandler,
    useExpandedElementKeyHandler,
} from "@/app/(private)/_hooks/useExpandedElementsHandlers";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { URL_PATHS } from "@/app/(private)/_config/constants";

import ProfileImage from "@/app/(private)/_components/Others/ProfileImage";
import SignOutButton from "@/app/(private)/_components/Buttons/SignOutButton";
import ExpandedArrow from "@/app/(private)/_components/Others/ExpandedArrow";
import SimpleLink from "@/app/(private)/_components/Headers/HeaderDropdowns/DropdownUser/LinkTypes/SimpleLink";

const AdminDropdownUser = () => {
    const loggedInUser = useStoredUser();

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
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
                        {loggedInUser !== null && loggedInUser !== undefined ? loggedInUser.userName : "Unknown"}
                    </span>
                    {loggedInUser !== null && loggedInUser !== undefined && loggedInUser.role && (
                        <span className="block text-xs text-black dark:text-white">{loggedInUser.role}</span>
                    )}
                </span>

                <span className="h-10 w-10 rounded-full">
                    <ProfileImage imgSrc={loggedInUser?.profileImage} />
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
                <ul className="flex flex-col border-b border-stroke dark:border-strokedark">
                    <li>
                        <SimpleLink
                            path={"/profile"}
                            label={"My Profile"}
                            icon={<MdOutlinePersonOutline size={"100%"} />}
                        />
                    </li>
                </ul>

                {loggedInUser !== null && loggedInUser !== undefined ? (
                    <SignOutButton />
                ) : (
                    <Link
                        href={URL_PATHS.LOGIN.path}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
                    >
                        {URL_PATHS.LOGIN.label}
                    </Link>
                )}
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default AdminDropdownUser;
