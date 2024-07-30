import React, { useRef, useState } from "react";
import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/(private)/_hooks/useExpandedElementsHandlers";
import HeaderExpandingLink from "@/app/(private)/_components/(common)/HeaderDropdowns/ButtonWithDropdown//HeaderExpandingLink";
import { IButtonWithDropdown } from "@/app/(private)/_utils/interfaces";

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
            <HeaderExpandingLink triggerRef={trigger} setIsTargetOpen={setDropdownOpen} icon={icon} />

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`fixed md:absolute right-0 md:-right-16 left-[60vw] md:left-[unset] mt-2.5 flex h-90 w-[90vw] md:w-80 -translate-x-[55vw] md:translate-x-0 flex-col rounded-md border border-stroke dark:border-strokedark bg-white dark:bg-gray-700 shadow-default ${
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
