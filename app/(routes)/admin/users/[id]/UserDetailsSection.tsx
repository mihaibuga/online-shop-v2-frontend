"use client";

import React, { Suspense, useEffect, useState } from "react";

import { MdOutlinePersonOff } from "react-icons/md";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IUser } from "@/app/(private)/_utils/interfaces";
import { getUserDetails } from "@/app/(private)/_services/UserService";

import Spinner from "@/app/(private)/_components/Others/Spinner";
import NoResults from "@/app/(private)/_components/Others/NoResults";
import EditUserForm from "@/app/(private)/_components/Forms/EditUserForm";

type Props = {
    userId: string;
};

const UserDetailsSection = ({userId}: Props) => {
    const loggedInUser = useStoredUser();

    const [userDetails, setUserDetails] = useState<IUser>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const query = { id: userId };

        getUserDetails(loggedInUser?.token, query).then((fetchedUserData) => {
            if (fetchedUserData !== undefined) {
                setUserDetails(fetchedUserData);
                setIsLoading(false);
            }
        });
    }, [loggedInUser, userId]);

    return (
        <Suspense fallback={<p>Loading user details...</p>}>
            {isLoading ? (
                <Spinner />
            ) : userDetails ? (
                <EditUserForm initialUserDetails={userDetails} />
            ) : (
                <NoResults text={`No User`} icon={<MdOutlinePersonOff />} />
            )}
        </Suspense>
    );
};

export default UserDetailsSection;
