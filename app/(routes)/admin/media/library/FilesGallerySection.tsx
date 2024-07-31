"use client";

import React, { useEffect, useState } from "react";

import { IFile } from "@/app/(private)/_utils/interfaces";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { getFiles } from "@/app/(private)/_services/FileService";
import FilesGallery from "@/app/(private)/_components/Galleries/FilesGallery";

type Props = {};

const FilesGallerySection = (props: Props) => {
    const loggedInUser = useStoredUser();

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

        getFiles(loggedInUser?.token, query).then((fetchedFilesData) => {
            if (fetchedFilesData !== undefined) {
                setFiles(fetchedFilesData.data);
                setIsNextPageAvailable(fetchedFilesData.isNextPage);
                setIsPreviousPageAvailable(fetchedFilesData.isPreviousPage);
                setPagesNumber(fetchedFilesData.totalPages);
                setTotalFilesNumber(fetchedFilesData.totalRecords);
            }
            setIsLoading(false);
        });
    }, [loggedInUser, isAscending, sortBy, currentPage, itemsOnPage]);

    return <FilesGallery files={files} isLoading={isLoading} />;
};

export default FilesGallerySection;
