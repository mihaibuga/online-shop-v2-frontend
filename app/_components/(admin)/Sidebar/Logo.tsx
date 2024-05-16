import React from "react";
import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { STORE_NAME, URL_PATHS } from "@/app/_utils/constants";

type Props = {};

const Logo = (props: Props) => {
    return (
        <Link href="/">
            <div className="p-4 py-6 pl-6 border-b border-[#DDDDDD]">
                <Link
                    href={URL_PATHS.ADMIN.path}
                    className="flex items-center space-x-3 rtl:space-x-reverse relative w-[85%]"
                >
                    <div className="w-full max-w-7 md:w-7 h-full md:h-7 dark:text-[#FFFFFF]">
                        <BsShop size={"100%"} />
                    </div>
                    <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                        {STORE_NAME}
                    </span>
                </Link>
            </div>
        </Link>
    );
};

export default Logo;
