import React from "react";
import { messages } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const MessagesPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Messages"} />
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
