import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const SearchBar = (props: Props) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400">
                <AiOutlineSearch size={"1rem"} />
            </div>
            <input
                type="text"
                id="search-navbar"
                className="w-full p-2 ps-10 text-sm text-[#222831] dark:text-gray-900 border border-gray-300 dark:border-[#222831] focus-visible:border rounded-lg bg-gray-100 dark:bg-[#31363F] focus:ring-blue-500 focus:border-blue-500 dark:focus:border-gray-600"
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;
