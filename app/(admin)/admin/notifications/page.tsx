import { notifications } from "@/app/_utils/MockingData";
import React from "react";

type Props = {};

const NotificationsPage = (props: Props) => {
    return (
        <div>
            <h1>Notifications</h1>
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
