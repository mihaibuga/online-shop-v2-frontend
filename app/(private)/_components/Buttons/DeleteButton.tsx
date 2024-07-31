import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const DeleteButton = ({clickHandler}: Props) => {
    return (
        <button
            type="button"
            className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-black dark:text-white"
            onClick={clickHandler}
        >
            <div className="w-5 h-5 group-hover:scale-110 text-red-600 dark:text-red-500">
                <AiOutlineDelete size={"100%"} />
            </div>
            <label htmlFor="checkbox-all-search" className="sr-only">
                Delete
            </label>
        </button>
    );
};

export default DeleteButton;
