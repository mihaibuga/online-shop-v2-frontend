"use client";

import React from "react";

import NewFileForm from "@/app/(private)/_components/(common)/Forms/Files/NewFileForm";

type Props = {};

const NewMediaPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Upload New Media
            </h2>

            <p className="text-md text-gray-400 mt-1">Upload a file to your library</p>

            <div className="flex flex-col w-full h-full my-5 justify-center">
                <NewFileForm />
            </div>
        </div>
    );
};

export default NewMediaPage;
