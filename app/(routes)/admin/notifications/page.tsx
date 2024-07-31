import React from "react";
import { Metadata } from "next";

import { notifications } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Notifications";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const NotificationsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
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
