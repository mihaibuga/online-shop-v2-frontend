import React from "react";
import ProfileImage from "@/app/(private)/_components/Others/ProfileImage";

type Props = {
    trigger: React.MutableRefObject<any>;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    profileImageSrc: string | undefined;
};

const UserMenuToggleButton = ({trigger, clickHandler, profileImageSrc}: Props) => {
    return (
        <button
            type="button"
            className="flex h-6 w-6 text-sm dark:text-[#FFFFFF] dark:bg-gray-800 bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative hover:scale-110 duration-200"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            ref={trigger}
            onClick={clickHandler}
        >
            <span className="sr-only">Open user menu</span>
            <ProfileImage imgSrc={profileImageSrc} />
        </button>
    );
};

export default UserMenuToggleButton;
