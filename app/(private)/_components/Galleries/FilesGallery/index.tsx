import React, { useEffect } from "react";
import Image from "next/image";
import { TbFilesOff } from "react-icons/tb";

import { IFile } from "@/app/(private)/_utils/interfaces";
import Spinner from "@/app/(private)/_components/(common)/Spinner/Spinner";
import NoResults from "@/app/(private)/_components/(common)/NoResults/NoResults";

type Props = {
    files: IFile[];
    isLoading: boolean;
};

const FilesGallery = ({ files, isLoading }: Props) => {
    useEffect(() => {}, [files]);

    return (
        <div>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                >
                    All types
                </button>
                <button
                    type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                >
                    Images
                </button>
                <button
                    type="button"
                    className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                >
                    Documents
                </button>
            </div>

            {isLoading ? (
                <Spinner />
            ) : files?.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="group w-full relative bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative w-full rounded-xl overflow-hidden p-6">
                                <div className="relative text-center w-full mx-auto h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                                    <Image
                                        src={`http://localhost:5296/uploads/${file.completeFileName}`}
                                        alt={`File ${index + 1}`}
                                        className="relative z-10 object-scale-down h-48 block h-full w-full group-hover:scale-[1.03] group-hover:opacity-75 duration-200"
                                        quality={100}
                                        fill
                                        priority
                                        sizes="100%"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoResults text={`No Files`} icon={<TbFilesOff />} />
            )}
        </div>
    );
};

export default FilesGallery;
