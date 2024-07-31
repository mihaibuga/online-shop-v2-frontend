import React from "react";
import { Metadata } from "next";

import { brands } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Brands";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const BrandsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={PAGE_TITLE} />

            <table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand, index) => (
                        <tr key={index}>
                            <td>[]</td>
                            <td>{brand.name}</td>
                            <td>{brand.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BrandsPage;
