import React from "react";

type Props = {};

const NewMediaPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Upload New Media
            </h2>

            <div>
                <span>Drop files here</span>
                <span>or</span>
                <button>Select Files</button>
            </div>
            <div>Maximum upload file size: 1 MB</div>
        </div>
    );
};

export default NewMediaPage;
