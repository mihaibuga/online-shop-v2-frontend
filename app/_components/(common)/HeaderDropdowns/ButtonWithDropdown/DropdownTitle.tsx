import React from "react";

interface IDropdownTitleProps {
    title: string;
}

const DropdownTitle = ({ title }: IDropdownTitleProps) => {
    return (
        <div className="px-4 py-3">
            <h5 className="text-sm font-medium text-bodydark2 dark:text-white">{title}</h5>
        </div>
    );
};

export default DropdownTitle;
