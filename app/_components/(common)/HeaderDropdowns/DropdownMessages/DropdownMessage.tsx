"use client";

import ButtonWithDropdown from "../ButtonWithDropdown/index";
import { AiOutlineMessage } from "react-icons/ai";
import DropdownTitle from "../ButtonWithDropdown/DropdownTitle";
import DropdownMessageLink from "./DropdownMessageLink";
import { messages } from "../../../../_utils/MockingData";

const DropdownMessage = () => {
    return (
        <ButtonWithDropdown icon={<AiOutlineMessage size={"100%"} />}>
            <>
                <DropdownTitle title={"Messages"} />

                <ul className="flex max-h-80 h-auto flex-col overflow-y-auto">
                    {messages.map((message, index) => (
                        <li key={index}>
                            <DropdownMessageLink
                                authorName={message.authorName}
                                authorImgSrc={message.authorImgSrc}
                                messageContent={message.messageContent}
                                time={message.time}
                            />
                        </li>
                    ))}
                </ul>
            </>
        </ButtonWithDropdown>
    );
};

export default DropdownMessage;
