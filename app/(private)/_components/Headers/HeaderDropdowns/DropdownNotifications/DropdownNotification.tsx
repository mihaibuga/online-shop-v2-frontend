"use client";

import { PiBellLight } from "react-icons/pi";
import { notifications } from "@/app/(private)/_utils/DummyData";

import ButtonWithDropdown from "@/app/(private)/_components/Headers/HeaderDropdowns/ButtonWithDropdown/index";
import DropdownTitle from "@/app/(private)/_components/Headers/HeaderDropdowns/ButtonWithDropdown/DropdownTitle";
import DropdownNotificationLink from "@/app/(private)/_components/Headers/HeaderDropdowns/DropdownNotifications/DropdownNotificationLink";

const DropdownNotification = () => {
    return (
        <ButtonWithDropdown icon={<PiBellLight size={"100%"} />}>
            <>
                <DropdownTitle title={"Notifications"} />

                <ul className="flex max-h-80 h-auto flex-col overflow-y-auto">
                    {notifications.map((notification, index) => (
                        <li key={index}>
                            <DropdownNotificationLink
                                notificationContent={notification.notificationContent}
                                time={notification.time}
                            />
                        </li>
                    ))}
                </ul>
            </>
        </ButtonWithDropdown>
    );
};

export default DropdownNotification;
