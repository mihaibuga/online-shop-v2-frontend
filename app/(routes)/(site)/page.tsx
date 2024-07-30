"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { getProductsInit } from "@/app/(private)/_hooks/initializers";
import { IProduct } from "@/app/(private)/_utils/interfaces";
import { devices, heroSlides, sneakers } from "@/app/(private)/_utils/MockingData";

import ProductsGrid from "@/app/(private)/_components/(site)/Products/ProductsGrid";
const HeroCarousel = dynamic(() => import("@/app/(private)/_components/(site)/HeroCarousel/HeroCarousel"), {
    ssr: false,
});

type Props = {};

const Home = (props: Props) => {
    const user = useStoredUser();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>();
    const [itemsOnPage, setItemsOnPage] = useState<number>(8);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {}, [products]);

    useEffect(() => {
        const query = { sortBy, isAscending, currentPage, itemsOnPage };

        getProductsInit(user, query).then((fetchedProducts) => {
            if (fetchedProducts !== undefined) {
                setProducts(fetchedProducts.data);
                setIsLoading(false);
            }
        });
    }, [user, isAscending, sortBy, currentPage, itemsOnPage]);

    return (
        <div className="flex flex-col h-full">
            <div className="block w-full h-[450px] lg:h-[500px] xl:h-[600px]">
                <HeroCarousel slides={heroSlides} />
            </div>

            <ProductsGrid sectionTitle={"Premium Sneakers"} products={sneakers} />

            <ProductsGrid sectionTitle={"Devices"} products={devices} />

            <ProductsGrid sectionTitle={"Other products"} products={products} />
        </div>
    );
};

export default Home;
