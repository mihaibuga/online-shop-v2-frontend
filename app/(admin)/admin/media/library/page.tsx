import { URL_PATHS } from "@/app/_utils/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const MediaLibraryPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Media Library
            </h2>

            <Link href={`${URL_PATHS.ADMIN.path}/media/new`}>Add new</Link>
            <div>Media files will be displayed here</div>
        </div>
    );
};

export default MediaLibraryPage;
