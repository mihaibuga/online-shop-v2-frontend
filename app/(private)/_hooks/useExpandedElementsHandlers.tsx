import { useEffect } from "react";
import { IClickEvent, IKeyEvent } from "@/app/(private)/_utils/interfaces";

// close on click outside
export const useExpandedElementClickHandler = ({
    expandedElementRef,
    triggerRef,
    isTargetOpen,
    setIsTargetOpen,
}: IClickEvent) => {
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!expandedElementRef.current) return;
            if (!isTargetOpen || expandedElementRef.current.contains(target) || triggerRef.current.contains(target))
                return;
            setIsTargetOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [expandedElementRef, triggerRef, isTargetOpen, setIsTargetOpen]);
};

// close if the esc key is pressed
export const useExpandedElementKeyHandler = ({ isTargetOpen, setIsTargetOpen }: IKeyEvent) => {
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!isTargetOpen || keyCode !== 27) return;
            setIsTargetOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [isTargetOpen, setIsTargetOpen]);
};
