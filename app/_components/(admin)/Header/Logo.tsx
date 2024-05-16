import React from "react";
import Link from "next/link";
import { STORE_NAME } from "@/app/_utils/constants";

type Props = {};

const Logo = (props: Props) => {
    return (
        <Link className="block flex-shrink-0 lg:hidden" href="/">
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                {STORE_NAME}
            </span>
        </Link>
    );
};

export default Logo;
