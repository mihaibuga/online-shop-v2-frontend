"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { URL_PATHS } from "@/app/_utils/constants";
import { IFile } from "@/app/_utils/interfaces";
import { useStoredUser } from "@/app/_hooks/useStoredUser";
import { getFilesInit } from "@/app/_hooks/initializers";

import FilesGallery from "@/app/_components/(admin)/FilesGallery/FilesGallery";

type Props = {};

const MediaLibraryPage = (props: Props) => {
    const user = useStoredUser();

    const [files, setFiles] = useState<IFile[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [itemsOnPage, setItemsOnPage] = useState<number>(10);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [isNextPageAvailable, setIsNextPageAvailable] = useState<boolean>(false);
    const [isPreviousPageAvailable, setIsPreviousPageAvailable] = useState<boolean>(false);
    const [pagesNumber, setPagesNumber] = useState<number>(1);
    const [totalFilesNumber, setTotalFilesNumber] = useState<number>(1);

    useEffect(() => {
        const query = { sortBy, isAscending, currentPage, itemsOnPage };

        getFilesInit(user, query).then((fetchedFilesData) => {
            console.log(fetchedFilesData);
            if (fetchedFilesData !== undefined) {
                setFiles(fetchedFilesData.data);
                setIsNextPageAvailable(fetchedFilesData.isNextPage);
                setIsPreviousPageAvailable(fetchedFilesData.isPreviousPage);
                setPagesNumber(fetchedFilesData.totalPages);
                setTotalFilesNumber(fetchedFilesData.totalRecords);
            }
            setIsLoading(false);
        });
    }, [user, isAscending, sortBy, currentPage, itemsOnPage]);

    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Media Library
            </h2>

            <Link href={`${URL_PATHS.ADMIN.path}/media/new`}>Add new</Link>
            <div>Media files will be displayed here</div>
            <div>
                <FilesGallery files={files} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default MediaLibraryPage;
