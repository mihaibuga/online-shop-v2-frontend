"use client";

import ButtonWithDropdown from "../ButtonWithDropdown/index";
import { PiBellLight } from "react-icons/pi";
import DropdownTitle from "../ButtonWithDropdown/DropdownTitle";
import DropdownNotificationLink from "./DropdownNotificationLink";
import { notifications } from "../../../../_utils/MockingData";

const DropdownNotification = () => {
    return (
        <ButtonWithDropdown icon={<PiBellLight size={"100%"} />}>
            <>
                <DropdownTitle title={"Notifications"} />

                <ul className="flex h-auto flex-col overflow-y-auto">
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
