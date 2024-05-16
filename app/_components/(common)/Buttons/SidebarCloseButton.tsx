import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_utils/useExpandedElementsHandlers";
import { IoMdClose } from "react-icons/io";

interface Props {
    sidebar: React.MutableRefObject<any>;
    isSidebarExpanded: boolean;
    toggleSidebarDisplay: React.MouseEventHandler<HTMLButtonElement> | undefined;
    additionalClasses?: string;
}

const SidebarCloseButton = ({ sidebar, isSidebarExpanded, toggleSidebarDisplay, additionalClasses }: Props) => {
    const trigger = useRef<any>(null);

    useExpandedElementClickHandler({
        expandedElementRef: sidebar,
        triggerRef: trigger,
        isTargetOpen: isSidebarExpanded,
        setIsTargetOpen: toggleSidebarDisplay,
    });
    useExpandedElementKeyHandler({ isTargetOpen: isSidebarExpanded, setIsTargetOpen: toggleSidebarDisplay });

    return (
        <button
            ref={trigger}
            onClick={toggleSidebarDisplay}
            aria-controls="sidebar"
            aria-expanded={isSidebarExpanded}
            className={`${additionalClasses} absolute top-2 right-2 text-[#222831] dark:text-[#EEEEEE] bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:text-[#222831] rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center z-25`}
        >
            <div className="w-8 h-8">
                <IoMdClose size={"100%"} />
            </div>
        </button>
    );
};

export default SidebarCloseButton;
