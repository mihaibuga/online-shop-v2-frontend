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
            className="relative flex h-full w-full items-center justify-center"
        >
            <span
                className={`absolute -top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-red-500 ${
                    notifying === false ? "hidden" : "inline"
                }`}
            >
                <span className="absolute z-10 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-100"></span>
            </span>

            <div className="w-full h-full fill-current duration-300 ease-in-out hover:scale-110">{icon}</div>
        </Link>
    );
};

export default HeaderExpandingLink;
