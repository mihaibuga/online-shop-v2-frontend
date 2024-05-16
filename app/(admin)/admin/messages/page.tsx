import { messages } from "@/app/_utils/MockingData";
import React from "react";

type Props = {};

const MessagesPage = (props: Props) => {
    return (
        <div>
            <h1>Messages</h1>
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
