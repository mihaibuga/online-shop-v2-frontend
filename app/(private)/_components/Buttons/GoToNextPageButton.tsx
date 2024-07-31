import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
    isNextEnabled: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const GoToNextPageButton = ({isNextEnabled, clickHandler}: Props) => {
  return (
    <button
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                isNextEnabled ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
            }focus:z-20 focus:outline-offset-0`}
            disabled={isNextEnabled === false}
            onClick={clickHandler}
        >
            <span className="sr-only">Next</span>
            <IoIosArrowForward className="w-2.5 h-2.5" />
        </button>
  )
}

export default GoToNextPageButton