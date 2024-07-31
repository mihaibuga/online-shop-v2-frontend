import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import { URL_PATHS } from "@/app/(private)/_config/constants";

import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";
import FilesGallerySection from "./FilesGallerySection";

type Props = {};

const PAGE_TITLE = "Media Library";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const MediaLibraryPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />

            <Link href={`${URL_PATHS.ADMIN.path}/media/new`}>Add new</Link>
            <div>Media files will be displayed here</div>
            <div>
                <FilesGallerySection />
            </div>
        </div>
    );
};

export default MediaLibraryPage;
