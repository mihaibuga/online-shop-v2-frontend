import React from "react";
import { categories } from "@/app/(private)/_utils/MockingData";

type Props = {};

const CategoriesPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Categories
            </h2>

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
