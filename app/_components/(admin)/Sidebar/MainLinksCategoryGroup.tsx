import { IMainLinksCategoryGroupProps } from "@/app/_utils/interfaces";
import React from "react";

const MainLinksCategoryGroup = ({ groupTitle, children }: IMainLinksCategoryGroupProps) => {
    return (
        <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">{groupTitle}</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
                {React.Children.map(children, (link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </div>
    );
};

export default MainLinksCategoryGroup;
