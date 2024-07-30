import { notifications } from "@/app/(private)/_utils/MockingData";
import React from "react";

type Props = {};

const NotificationsPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Notifications
            </h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Notification</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((notification, index) => (
                        <tr key={index}>
                            <td>[]</td>
                            <td>{notification.notificationContent}</td>
                            <td>{notification.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotificationsPage;
