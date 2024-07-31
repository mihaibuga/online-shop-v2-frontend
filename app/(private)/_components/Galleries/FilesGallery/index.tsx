"use client";

import React, { useEffect } from "react";
import { TbFilesOff } from "react-icons/tb";

import { IFile } from "@/app/(private)/_utils/interfaces";

import Spinner from "@/app/(private)/_components/Others/Spinner";
import NoResults from "@/app/(private)/_components/Others/NoResults";
import FileTypeSwitcher from "@/app/(private)/_components/Buttons/FileTypeSwitcher";
import GalleryGrid from "@/app/(private)/_components/Grids/Files/GalleryGrid";

type Props = {
    files: IFile[];
    isLoading: boolean;
};

const FilesGallery = ({ files, isLoading }: Props) => {
    useEffect(() => {}, [files]);

    return (
        <div>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <FileTypeSwitcher isSelected={true} buttonText={"All types"} />
                <FileTypeSwitcher isSelected={false} buttonText={"Images"} />
                <FileTypeSwitcher isSelected={false} buttonText={"Documents"} />
            </div>

            {isLoading ? (
                <Spinner />
            ) : files?.length ? (
                <GalleryGrid files={files} />
            ) : (
                <NoResults text={`No Files`} icon={<TbFilesOff />} />
            )}
        </div>
    );
};

export default FilesGallery;
