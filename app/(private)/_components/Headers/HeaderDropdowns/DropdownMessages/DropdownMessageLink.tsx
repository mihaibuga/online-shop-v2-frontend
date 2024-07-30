import React from "react";
import Link from "next/link";
import { IMessage } from "@/app/(private)/_utils/interfaces";
import ProfileImage from "@/app/(private)/_components/(common)/ProfileImage";

const DropdownMessageLink = ({ authorName, authorImgSrc, messageContent, time }: IMessage) => {
    return (
        <Link
            className="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-200 dark:border-strokedark dark:hover:bg-meta-4 text-black dark:text-white"
            href="/messages"
        >
            <div className="h-12 w-12 rounded-full">
                <ProfileImage imgSrc={authorImgSrc} />
            </div>

            <div>
                <h6 className="text-sm font-medium">{authorName}</h6>
                <p className="text-sm">{messageContent}</p>
                <p className="text-xs">{time}</p>
            </div>
        </Link>
    );
};

export default DropdownMessageLink;
