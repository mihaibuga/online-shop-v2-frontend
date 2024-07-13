import React from "react";

interface IProps {
    children: React.JSX.Element;
};

const HeaderActionButtonWrapper = ({ children }: IProps) => {
    return (
        <div className="relative w-10 h-10 p-2 rounded-md text-[#000000] dark:text-[#FFFFFF] active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]">
            {children}
        </div>
    );
};

export default HeaderActionButtonWrapper;
