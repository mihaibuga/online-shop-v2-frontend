import React from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
    isOpen: boolean;
    additionalClasses?: string;
}

const ExpandedArrow = ({ isOpen, additionalClasses }: Props) => {
    return (
        <span className={`text-[#222831] dark:text-[#EEEEEE]${additionalClasses ? ` ${additionalClasses}` : ""}`}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
    );
};

export default ExpandedArrow;
