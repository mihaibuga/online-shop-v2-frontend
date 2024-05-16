import { INotification } from "@/app/_utils/interfaces";
import Link from "next/link";
import React from "react";

const DropdownNotificationLink = ({ notificationContent, time }: INotification) => {
    return (
        <Link
            className="flex flex-col gap-3 border-t border-stroke px-4 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4 text-black dark:text-white"
            href="/notifications"
        >
            <p className="text-sm">{notificationContent}</p>
            <p className="text-xs">{time}</p>
        </Link>
    );
};

export default DropdownNotificationLink;