import { IUser } from "@/app/_utils/interfaces";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {
    user: IUser | null | undefined;
};

const ProfileImage = ({user}: Props) => {
    return user !== null && user !== undefined ? (
        <Image
            className="rounded-full cursor-pointer"
            src={user.profileImage}
            alt="user"
            width={112}
            height={112}
            style={{
                width: "auto",
                height: "auto",
            }}
        />
    ) : (
        <CgProfile size={"100%"} />
    );
};

export default ProfileImage;
