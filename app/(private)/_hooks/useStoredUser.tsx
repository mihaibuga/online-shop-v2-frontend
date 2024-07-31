import { useEffect, useState } from "react";
import { IUser } from "@/app/(private)/_utils/interfaces";
import useAuthStore from "@/app/(private)/_stores/authStore";

export const useStoredUser = () => {
    const { loggedInUserProfile } = useAuthStore();

    const [user, setUser] = useState<IUser | null | undefined>();
    useEffect(() => {
        setUser(loggedInUserProfile);
    }, [loggedInUserProfile]);

    return user;
};
