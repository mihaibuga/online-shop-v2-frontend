"use client";

import React, { useEffect, useState } from "react";

import { useStoredUser } from "../_hooks/useStoredUser";
import { getProductsInit } from "../_hooks/initializers";
import { IProduct } from "../_utils/interfaces";
import { heroSlides, sneakers } from "../_utils/MockingData";

import HeroCarousel from "../_components/(site)/HeroCarousel/HeroCarousel";
import ProductsGrid from "../_components/(site)/Products/ProductsGrid";

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

            <ProductsGrid sectionTitle={"Other products"} products={products} />
        </div>
    );
};

export default Home;
