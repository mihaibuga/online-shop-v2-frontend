import React from "react";
import { notifications } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const NotificationsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Notifications"} />
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
