import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
    isOpen: boolean;
}

const ExpandedArrow = ({ isOpen }: Props) => {
    return <span className="text-[#222831] dark:text-[#EEEEEE]">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>;
};

export default ExpandedArrow;
