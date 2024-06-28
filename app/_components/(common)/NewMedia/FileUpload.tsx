import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type Props = {
    changeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
    fileTypes: string[];
    getMappedFileExtensions: (fileTypes: string[]) => React.JSX.Element[];
};

const FileUpload = ({ changeHandler, fileTypes, getMappedFileExtensions }: Props) => {
    return (
        <label className="flex flex-col gap-2 items-center justify-center w-full h-full rounded-lg cursor-pointer">
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-xl">
                    <FaCloudUploadAlt className="text-gray-400 group-hover:text-[#004AAD] text-6xl" />
                </p>
                <p className="text-xl text-center text-gray-400 group-hover:text-black font-normal group-hover:font-semibold">
                    Upload file
                </p>
            </div>

            <div className="flex flex-col text-gray-400 text-center text-sm">
                <p>
                    <span>Allowed extensions: </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {getMappedFileExtensions(fileTypes)}
                    </span>
                </p>
                <p>
                    <span>Maximum upload file size: </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2 GB</span>
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <p className="bg-gray-400 group-hover:bg-[#004AAD] text-center rounded text-white text-md font-medium p-2 w-52 outline-none">
                    Click to select file
                </p>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                    <span className="font-semibold">or drag and drop</span>
                </p>
            </div>

            <input type="file" name="upload-file" onChange={changeHandler} className="w-0 h-0" />
        </label>
    );
};

export default FileUpload;
