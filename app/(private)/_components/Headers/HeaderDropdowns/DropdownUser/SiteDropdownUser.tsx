import React, { useRef, useState } from "react";
import Link from "next/link";
import { MdFavorite, MdOutlinePersonOutline } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

import {
    useExpandedElementClickHandler,
    useExpandedElementKeyHandler,
} from "@/app/(private)/_hooks/useExpandedElementsHandlers";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { URL_PATHS } from "@/app/(private)/_utils/constants";

import ProfileImage from "@/app/(private)/_components/(common)/ProfileImage";
import SimpleLink from "@/app/(private)/_components/Headers/HeaderDropdowns/DropdownUser/LinkTypes/SimpleLink";
import SignOutButton from "@/app/(private)/_components/(common)/Buttons/SignOutButton";

type Props = {};

const SiteDropdownUser = ({}: Props) => {
    const loggedInUser = useStoredUser();

    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useExpandedElementClickHandler({
        expandedElementRef: dropdown,
        triggerRef: trigger,
        isTargetOpen: isUserMenuOpen,
        setIsTargetOpen: setIsUserMenuOpen,
    });
    useExpandedElementKeyHandler({ isTargetOpen: isUserMenuOpen, setIsTargetOpen: setIsUserMenuOpen });

    return (
        <div className="relative">
            <button
                type="button"
                className="flex h-6 w-6 text-sm dark:text-[#FFFFFF] dark:bg-gray-800 bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative hover:scale-110 duration-200"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                ref={trigger}
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
                <span className="sr-only">Open user menu</span>
                <ProfileImage imgSrc={loggedInUser?.profileImage} />
            </button>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setIsUserMenuOpen(true)}
                onBlur={() => setIsUserMenuOpen(false)}
                id="user-dropdown"
                className={`z-15 ${
                    isUserMenuOpen ? "" : "hidden"
                } my-4 w-max text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-[-5px] md:right-0 overflow-hidden`}
            >
                <div className="">
                    {loggedInUser !== null && loggedInUser !== undefined ? (
                        <>
                            <span className="block px-4 py-2 text-sm text-gray-900 dark:text-white">
                                {loggedInUser.userName}
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
                        <SimpleLink
                            path={URL_PATHS.MY_ACCOUNT.path}
                            label={URL_PATHS.MY_ACCOUNT.label}
                            icon={<MdOutlinePersonOutline size={"100%"} />}
                        />
                    </li>

                    <li>
                        <SimpleLink
                            path={URL_PATHS.ORDERS.path}
                            label={URL_PATHS.ORDERS.label}
                            hoverColorName={"blue"}
                            icon={<IoMdCart size={"100%"} />}
                        />
                    </li>

                    <li>
                        <SimpleLink
                            path={URL_PATHS.WISHLIST.path}
                            label={URL_PATHS.WISHLIST.label}
                            hoverColorName={"red"}
                            icon={<MdFavorite size={"100%"} />}
                        />
                    </li>

                    <li>{loggedInUser !== null && loggedInUser !== undefined && <SignOutButton />}</li>
                </ul>
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    );
};

export default SiteDropdownUser;