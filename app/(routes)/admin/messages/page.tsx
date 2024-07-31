import React from "react";
import { Metadata } from "next";

import { messages } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Messages";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const MessagesPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Author</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message, index) => (
                        <tr key={index}>
                            <td>[]</td>
                            <td>{message.authorName}</td>
                            <td>{message.messageContent}</td>
                            <td>{message.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessagesPage;
