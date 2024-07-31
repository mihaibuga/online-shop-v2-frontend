import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import TableActionDropdownToggle from "@/app/(private)/_components/Buttons/Toggles/TableActionDropdownToggle";

type Props = {};

const TableActions = (props: Props) => {
    const [isActionItemsDropdownVisible, setIsActionItemsDropdownVisible] = useState<boolean>(false);

    const handleActionItemsDisplay = () => {
        setIsActionItemsDropdownVisible((prev) => !prev);
    };

    return (
        <>
            {/* Table actions section */}
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4 bg-white dark:bg-gray-900 w-full">
                {/* Action on selected item(s) */}
                <div>
                    <TableActionDropdownToggle
                        clickHandler={handleActionItemsDisplay}
                        isActionItemsDropdownVisible={isActionItemsDropdownVisible}
                    />

                    <div
                        id="dropdownAction"
                        className={`z-10 ${
                            isActionItemsDropdownVisible ? "absolute" : "hidden"
                        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                        <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownActionButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit User
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Delete User
                            </a>
                        </div>
                    </div>
                </div>

                {/* User search section */}
                <div className="relative w-full md:w-80">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <AiOutlineSearch size={"100%"} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="table-search-users"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for users"
                    />
                </div>
            </div>
        </>
    );
};

export default TableActions;
