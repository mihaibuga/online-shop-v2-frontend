"use client";

import React, { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";

import UsersTable from "@/app/_components/(admin)/UsersTable/UsersTable";
import NoResults from "@/app/_components/(common)/NoResults/NoResults";
import Spinner from "@/app/_components/(common)/Spinner/Spinner";

import { IUser } from "@/app/_utils/interfaces";
import { getUsers } from "@/app/_services/UserService";

import { MdOutlinePersonOff } from "react-icons/md";
import { useStoredUser } from "@/app/_hooks/useStoredUser";

type Props = {};

const UsersPage = (props: Props) => {
    const user = useStoredUser();

    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onUserDelete = (id: string) => {
        const removed = users.filter((user) => {
            return user.id !== id;
        });
        setUsers(removed);
    };

    useEffect(() => {}, [users]);

    useEffect(() => {
        const getVideosInit = async () => {
            if (user) {
                if (user.token) {
                    const result: any = await getUsers(user.token);

                    if (result.data) {
                        setUsers(result.data);
                    }
                    if (typeof result === "string") {
                        toast.warning("Unable to connect to API");
                    } else if (Array.isArray(result.data)) {
                        setUsers(result?.data);
                        setIsLoading(false);
                    }
                } else {
                    toast.warning("A server error has occured!");
                    setIsLoading(false);
                }
            }
        };
        getVideosInit();
    }, [user]);

    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Users
            </h2>

            <Suspense fallback={<p>Loading users...</p>}>
                {isLoading ? (
                    <Spinner />
                ) : users?.length ? (
                    <UsersTable users={users} onUserDelete={onUserDelete} />
                ) : (
                    <NoResults text={`No Users`} icon={<MdOutlinePersonOff />} />
                )}
            </Suspense>
        </div>
    );
};

export default UsersPage;
