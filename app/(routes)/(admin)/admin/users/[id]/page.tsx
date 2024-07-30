"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { MdOutlinePersonOff } from "react-icons/md";

import { getUserDetailsInit } from "@/app/(private)/_hooks/initializers";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IUser } from "@/app/(private)/_utils/interfaces";

import Spinner from "@/app/(private)/_components/(common)/Spinner/Spinner";
import NoResults from "@/app/(private)/_components/(common)/NoResults/NoResults";

type Params = {
    id: string;
};

const UserPage = ({ params }: { params: Params }) => {
    const user = useStoredUser();

    const [userDetails, setUserDetails] = useState<IUser>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const query = { id: params.id };

        getUserDetailsInit(user, query).then((fetchedUserData) => {
            if (fetchedUserData !== undefined) {
                setUserDetails(fetchedUserData);
                setIsLoading(false);
            }
        });
    }, [user, params.id]);

    return (
        <Suspense fallback={<p>Loading user details...</p>}>
            {isLoading ? (
                <Spinner />
            ) : userDetails ? (
                <div>
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        User
                    </h2>

                    <div className="p-2 md:p-4">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                            <div className="grid max-w-2xl mx-auto mt-8">
                                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                    {userDetails.profileImage ? (
                                        <>
                                            <div className={`w-${40} h-${40} relative`}>
                                                <Image
                                                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                                    src={userDetails.profileImage}
                                                    alt="Bordered user avatar"
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

                                            <div className="flex flex-col space-y-5 sm:ml-8">
                                                <button
                                                    type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                                >
                                                    Change picture
                                                </button>
                                                <button
                                                    type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                                >
                                                    Delete picture
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className={`w-${40} h-${40}`}>
                                            <CgProfile size={"100%"} />
                                        </div>
                                    )}
                                </div>

                                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                        <div className="w-full">
                                            <label
                                                htmlFor="firstName"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                                placeholder="First name"
                                                value={""}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label
                                                htmlFor="lastName"
                                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                                placeholder="Last name"
                                                value={""}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="email@mail.com"
                                            value={userDetails.email}
                                        />
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="userName"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            id="userName"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Username"
                                            value={userDetails.userName}
                                        />
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label
                                            htmlFor="role"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            id="role"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Role"
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NoResults text={`No User`} icon={<MdOutlinePersonOff />} />
            )}
        </Suspense>
    );
};

export default UserPage;
