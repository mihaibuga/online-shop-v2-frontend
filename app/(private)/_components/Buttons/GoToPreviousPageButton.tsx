import React from "react";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
    isPrevEnabled: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const GoToPreviousPageButton = ({isPrevEnabled, clickHandler}: Props) => {
    return (
        <button
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                isPrevEnabled ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
            }focus:z-20 focus:outline-offset-0`}
            disabled={isPrevEnabled === false}
            onClick={clickHandler}
        >
            <span className="sr-only">Previous</span>
            <IoIosArrowBack className="w-2.5 h-2.5" />
        </button>
    );
};

export default GoToPreviousPageButton;
