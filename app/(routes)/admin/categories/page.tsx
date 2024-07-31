import React from "react";
import { Metadata } from "next";

import { categories } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const PAGE_TITLE = "Categories";

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const CategoriesPage = (props: Props) => {
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
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>[]</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesPage;
