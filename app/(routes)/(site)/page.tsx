"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { getProducts } from "@/app/(private)/_services/ProductService";
import { useStoredUser } from "@/app/(private)/_hooks/useStoredUser";
import { IProduct } from "@/app/(private)/_utils/interfaces";
import { devices, heroSlides, sneakers } from "@/app/(private)/_utils/DummyData";

import ProductsGrid from "@/app/(private)/_components/Grids/ProductsGrid";

const HeroCarousel = dynamic(() => import("@/app/(private)/_components/Carousels/HeroCarousel"), {
    ssr: false,
});

type Props = {};

const Home = (props: Props) => {
    const loggedInUser = useStoredUser();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>();
    const [itemsOnPage, setItemsOnPage] = useState<number>(8);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {}, [products]);

    useEffect(() => {
        const query = { sortBy, isAscending, currentPage, itemsOnPage };

        getProducts(loggedInUser?.token, query).then((fetchedProducts) => {
            if (fetchedProducts !== undefined) {
                setProducts(fetchedProducts.data);
                setIsLoading(false);
            }
        });
    }, [loggedInUser, isAscending, sortBy, currentPage, itemsOnPage]);

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
