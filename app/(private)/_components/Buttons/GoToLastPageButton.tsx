import React from "react";

type Props = {
    currentPage: number;
    totalPages: number;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const GoToLastPageButton = ({currentPage, totalPages, clickHandler}: Props) => {
    return (
        <button
            className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 ${
                currentPage < totalPages ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
            }focus:z-20 focus:outline-offset-0`}
            disabled={currentPage === totalPages}
            onClick={clickHandler}
        >
            Last
        </button>
    );
};

export default GoToLastPageButton;
