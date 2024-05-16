import React from "react";
import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { STORE_NAME, URL_PATHS } from "@/app/_utils/constants";

interface IProps {
    linkPath: string;
}

const Logo = ({ linkPath }: IProps) => {
    return (
        <Link href={linkPath} className="flex items-center md:space-x-3 rtl:space-x-reverse relative w-[85%]">
            <div className="hidden md:block w-full max-w-7 md:w-7 h-full md:h-7 dark:text-[#FFFFFF]">
                <BsShop size={"100%"} />
            </div>
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                {STORE_NAME}
            </span>
        </Link>
    );
};

export default Logo;
