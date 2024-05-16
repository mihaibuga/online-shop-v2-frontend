import { IHeaderDropdownLink } from "@/app/_utils/interfaces";
import Link from "next/link";
import React, { useState } from "react";

const HeaderExpandingLink = ({ triggerRef, setIsTargetOpen, icon }: IHeaderDropdownLink) => {
    const [notifying, setNotifying] = useState(true);

    return (
        <Link
            ref={triggerRef}
            onClick={() => {
                setNotifying(false);
                setIsTargetOpen((prev: boolean) => !prev);
            }}
            href="#"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
            <span
                className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
                    notifying === false ? "hidden" : "inline"
                }`}
            >
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>

            <div className="w-10 p-2 fill-current duration-300 ease-in-out">{icon}</div>
        </Link>
    );
};

export default HeaderExpandingLink;
