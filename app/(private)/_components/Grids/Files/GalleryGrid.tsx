import React from "react";
import Image from "next/image";

import { IFile } from "@/app/(private)/_utils/interfaces";

type Props = {
    files: IFile[];
};

const GalleryGrid = ({files}: Props) => {
    return (
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
    );
};

export default GalleryGrid;
