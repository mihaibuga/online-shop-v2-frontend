import React from "react";
import { brands } from "@/app/(private)/_utils/DummyData";
import AdminPageTitle from "@/app/(private)/_components/Headings/AdminPageTitle";

type Props = {};

const BrandsPage = (props: Props) => {
    return (
        <div>
            <AdminPageTitle titleText={"Brands"} />

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
