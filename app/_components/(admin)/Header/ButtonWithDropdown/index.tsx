import React, { useRef, useState } from "react";
import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_utils/useExpandedElementsHandlers";
import HeaderExpandingLink from "./HeaderDropdownLink";
import { IButtonWithDropdown } from "@/app/_utils/interfaces";

const ButtonWithDropdown = ({ icon, children }: IButtonWithDropdown) => {
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
        <>
            <HeaderExpandingLink
                triggerRef={trigger}
                setIsTargetOpen={setDropdownOpen}
                icon={icon}
            />

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-md border border-stroke dark:border-strokedark bg-white dark:bg-gray-700 shadow-default sm:right-0 sm:w-80 ${
                    dropdownOpen === true ? "block" : "hidden"
                }`}
            >
                {children}
            </div>
            {/* <!-- Dropdown End --> */}
        </>
    );
};

export default ButtonWithDropdown;
