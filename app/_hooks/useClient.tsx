import { useEffect, useState } from "react";

export const useClient = () => {
    const [isClient, setClient] = useState<boolean>(false);

    useEffect(() => {
        setClient(true);
    }, []);

    return isClient;
};
