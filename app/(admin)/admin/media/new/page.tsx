"use client";

import React, { useEffect, useState } from "react";

import { AiOutlineLoading } from "react-icons/ai";

import ErrorAlert from "@/app/_components/(common)/Alerts/ErrorAlert/ErrorAlert";
import FileUpload from "@/app/_components/(common)/NewMedia/FileUpload";

import InputField from "@/app/_components/(common)/NewMedia/InputField";

import SubmitButton from "@/app/_components/(common)/NewMedia/SubmitButton";
import DiscardButton from "@/app/_components/(common)/NewMedia/DiscardButton";

import { useStoredUser } from "@/app/_hooks/useStoredUser";
import { uploadFile } from "@/app/_services/FileService";
import { headers } from "@/app/_services/UserService";

type Props = {};

type IFileAsset = {
    file: any;
    fileName: string;
};

const NewMediaPage = (props: Props) => {
    const user = useStoredUser();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [wrongFileType, setWrongFileType] = useState<boolean>(false);
    const [savingFile, setSavingFile] = useState<boolean>(false);
    const [fileAsset, setFileAsset] = useState<IFileAsset>();

    const [fileTypes, setFileTypes] = useState<string[]>([]);
    const [maxUploadSize, setMaxUploadSize] = useState<number>();

    const [fileEnter, setFileEnter] = useState(false);

    const [customFileName, setCustomFileName] = useState("");

    const isFileTypeCorrect = (fileType: string) => {
        return fileTypes.includes(fileType);
    };

    const getFileNameWithoutExtension = (fileName: string) => {
        let split = fileName.split(".");
        split.pop();
        let finalName = split.join(".");
        return finalName;
    };

    const setFilePreview = (selectedFile: any) => {
        const isCorrectFileType = isFileTypeCorrect(selectedFile.type);

        setIsLoading(isCorrectFileType ? true : false);
        setWrongFileType(isCorrectFileType ? false : true);
        setIsLoading(false);
        let newFile = isCorrectFileType
            ? {
                  file: selectedFile,
                  fileName: selectedFile.name,
              }
            : undefined;
        setFileAsset(newFile);
        setCustomFileName(getFileNameWithoutExtension(selectedFile.name));
        console.log(newFile);
    };

    const handleFileSelection = async (event: any) => {
        const selectedFile = event.target.files[0];

        setFilePreview(selectedFile);
    };

    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFileEnter(false);

        if (e.dataTransfer.items) {
            let items = Array.from(e.dataTransfer.items);

            items.forEach((item, i) => {
                if (item.kind === "file") {
                    const droppedFile = item.getAsFile();

                    if (droppedFile) {
                        setFilePreview(droppedFile);
                    }
                }
            });
        } else {
            let files = Array.from(e.dataTransfer.files);

            files.forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    };

    const handleFileUpload = async () => {
        if (user !== null && user !== undefined) {
            setSavingFile(true);

            if (fileAsset !== undefined) {
                const formData = new FormData();

                formData.append("file", fileAsset.file);
                formData.append("fileName", fileAsset.fileName);
                const uploadFileResponse = await uploadFile(formData, headers(user.token));
                console.log(uploadFileResponse);
            } else {
            }
        }
    };

    const handleDiscard = () => {
        setSavingFile(false);
        setFileAsset(undefined);
        setCustomFileName("");
    };

    const getFileTypeExtension = (fileType: string) => fileType.split("/")[1];

    const getMappedFileExtensions = (fileTypes: string[]) =>
        fileTypes.map((fileType, index) => (
            <>
                <span>
                    {getFileTypeExtension(fileType)}
                    {index < fileTypes.length - 1 ? ", " : ""}
                </span>
            </>
        ));

    useEffect(() => {
        setFileTypes(["video/mp4", "video/webm", "video/ogg", "image/png", "image/jpg"]);
        setMaxUploadSize(2147483648); // 2 GB
    }, []);

    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Upload New Media
            </h2>

            <p className="text-md text-gray-400 mt-1">Upload a file to your library</p>

            <div className="flex flex-col w-full h-full my-5 justify-center">
                <div className="w-full rounded-lg flex flex-col gap-6 flex-wrap justify-center items-center p-6">
                    <div className="w-full">
                        <div
                            onDragOver={(e) => {
                                e.preventDefault();
                                setFileEnter(true);
                            }}
                            onDragLeave={(e) => {
                                setFileEnter(false);
                            }}
                            onDragEnd={(e) => {
                                e.preventDefault();
                                setFileEnter(false);
                            }}
                            onDrop={handleOnDrop}
                            className={`group flex flex-col justify-center items-center rounded-xl border-4 border-dashed ${
                                fileEnter ? "border-[#004AAD]" : "border-gray-300"
                            } hover:border-[#004AAD] ${fileEnter ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-100 ${
                                fileEnter ? "dark:bg-gray-600" : "dark:bg-gray-700"
                            } dark:hover:bg-gray-600 outline-none w-full h-[256px] p-10 cursor-pointer`}
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading className="text-3xl loading-icon text-[#004AAD]" />
                                    <br />
                                    <p className="text-center text-3xl text-[#004AAD] font-semibold">Uploading...</p>
                                </>
                            ) : (
                                <FileUpload
                                    changeHandler={handleFileSelection}
                                    fileTypes={fileTypes}
                                    getMappedFileExtensions={getMappedFileExtensions}
                                />
                            )}
                        </div>

                        {wrongFileType && (
                            <ErrorAlert
                                alertLabelText={"The file could not be uploaded"}
                                alertBodyText={
                                    <>
                                        Only files with the following extensions are allowed:{" "}
                                        <span className="italic">{getMappedFileExtensions(fileTypes)}</span>
                                    </>
                                }
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-3 pb-10">
                        <InputField
                            labelText={"Custom file name"}
                            inputValue={customFileName}
                            inputType={"text"}
                            changeHandler={(event) => setCustomFileName(event.target.value)}
                        />

                        <div className="flex gap-6 mt-10">
                            <DiscardButton handleDiscard={handleDiscard} />
                            <SubmitButton
                                isDisabled={fileAsset ? false : true}
                                clickHandler={handleFileUpload}
                                isSubmitting={savingFile}
                            />
                            <input type="submit" value="Upload" />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    {isLoading ? (
                        <AiOutlineLoading className="text-3xl loading-icon text-[#004AAD]" />
                    ) : (
                        fileAsset && (
                            <div className="rounded-3xl w-full p-4 flex flex-col gap-6">
                                <div>
                                    <span className="font-semibold">Ready to upload:</span> {fileAsset.fileName}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewMediaPage;
