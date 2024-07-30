import React from "react";
import { brands } from "@/app/(private)/_utils/MockingData";

type Props = {};

const BrandsPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Brands
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
