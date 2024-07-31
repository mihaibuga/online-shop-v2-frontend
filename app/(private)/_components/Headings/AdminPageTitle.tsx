import React from "react";

type Props = {
    titleText: string;
};

const AdminPageTitle = ({titleText}: Props) => {
    return (
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {titleText}
        </h2>
    );
};

export default AdminPageTitle;
