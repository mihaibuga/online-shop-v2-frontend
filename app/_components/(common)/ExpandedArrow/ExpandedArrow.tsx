import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
    isOpen: boolean;
}

const ExpandedArrow = ({ isOpen }: Props) => {
    return isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />;
};

export default ExpandedArrow;
