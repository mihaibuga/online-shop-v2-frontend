import { messages } from "@/app/_utils/MockingData";
import React from "react";

type Props = {};

const MessagesPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Messages
            </h2>
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
