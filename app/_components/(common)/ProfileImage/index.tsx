import { useClient } from "@/app/_hooks/useClient";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {
    imgSrc?: string;
    width?: number;
    height?: number;
};

const ProfileImage = ({ width = 112, height = 112, imgSrc }: Props) => {
    const isClient = useClient();

    return isClient && imgSrc ? (
        <Image
            className="rounded-full cursor-pointer"
            src={imgSrc}
            alt="user"
            width={width}
            height={height}
            style={{
                width: "auto",
                height: "auto",
            }}
        />
    ) : (
        <div className={`w-${width} h-${width}`}>
            <CgProfile size={"100%"} />
        </div>
    );
};

export default ProfileImage;
