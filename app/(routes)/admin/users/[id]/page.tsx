"use client";

import React, { Suspense, useEffect, useState } from "react";

import { MdOutlinePersonOff } from "react-icons/md";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IUser } from "@/app/(private)/_utils/interfaces";
import { getUserDetails } from "@/app/(private)/_services/UserService";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import Spinner from "@/app/(private)/_components/Others/Spinner";
import NoResults from "@/app/(private)/_components/Others/NoResults";
import EditUserForm from "@/app/(private)/_components/Forms/EditUserForm";

type Params = {
    id: string;
};

const UserPage = ({ params }: { params: Params }) => {
    const loggedInUser = useStoredUser();

    const [userDetails, setUserDetails] = useState<IUser>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const query = { id: params.id };

        getUserDetails(loggedInUser?.token, query).then((fetchedUserData) => {
            if (fetchedUserData !== undefined) {
                setUserDetails(fetchedUserData);
                setIsLoading(false);
            }
        });
    }, [loggedInUser, params.id]);

    return (
        <div>
            <AdminPageTitle titleText={"User Details"} />
            <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <Suspense fallback={<p>Loading user details...</p>}>
                        {isLoading ? (
                            <Spinner />
                        ) : userDetails ? (
                            <EditUserForm initialUserDetails={userDetails} />
                        ) : (
                            <NoResults text={`No User`} icon={<MdOutlinePersonOff />} />
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
