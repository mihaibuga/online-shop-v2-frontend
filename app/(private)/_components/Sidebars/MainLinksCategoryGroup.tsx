import React from "react";
import { IMainLinksCategoryGroupProps } from "@/app/(private)/_utils/interfaces";

const MainLinksCategoryGroup = ({ groupTitle, children }: IMainLinksCategoryGroupProps) => {
    return (
        <div>
            {groupTitle && <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">{groupTitle}</h3>}

            <ul className="mb-6 flex flex-col gap-1.5">
                {React.Children.map(children, (link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </div>
    );
};

export default MainLinksCategoryGroup;
