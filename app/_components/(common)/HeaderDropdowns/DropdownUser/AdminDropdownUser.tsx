"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { MdOutlinePersonOutline } from "react-icons/md";

import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_hooks/useExpandedElementsHandlers";
import { useStoredUser } from "@/app/_hooks/useStoredUser";

import ProfileImage from "../../ProfileImage";
import SignOutButton from "../../Buttons/SignOutButton";
import ExpandedArrow from "../../ExpandedArrow/ExpandedArrow";
import SimpleLink from "./LinkTypes/SimpleLink";

const AdminDropdownUser = () => {
    const user = useStoredUser();

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
                        {user !== null && user !== undefined ? user.userName : "Unknown"}
                    </span>
                    <span className="block text-xs text-black dark:text-white">Admin</span>
                </span>

                <span className="h-10 w-10 rounded-full">
                    <ProfileImage imgSrc={user?.profileImage} />
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

                {user !== null && user !== undefined && <SignOutButton />}
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default AdminDropdownUser;
