import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import useGeneralStore from "@/app/_stores/generalStore";
import { useExpandedElementClickHandler, useExpandedElementKeyHandler } from "@/app/_utils/useExpandedElementsHandlers";

interface Props {
    sidebar: React.MutableRefObject<any>;
};

const CloseButton = ({sidebar}: Props) => {
    const { isAdminSidebarOpen, toggleAdminSidebarDisplay } = useGeneralStore();

    const trigger = useRef<any>(null);

    useExpandedElementClickHandler({
        expandedElementRef: sidebar,
        triggerRef: trigger,
        isTargetOpen: isAdminSidebarOpen,
        setIsTargetOpen: toggleAdminSidebarDisplay,
    });
    useExpandedElementKeyHandler({ isTargetOpen: isAdminSidebarOpen, setIsTargetOpen: toggleAdminSidebarDisplay });

    return (
        <button
            ref={trigger}
            onClick={toggleAdminSidebarDisplay}
            aria-controls="sidebar"
            aria-expanded={isAdminSidebarOpen}
            className="block lg:hidden"
        >
            <FaArrowLeft />
        </button>
    );
};

export default CloseButton;
