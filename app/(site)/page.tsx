"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useStoredUser } from "../_hooks/useStoredUser";
import { IProduct } from "../_utils/interfaces";
import { getProducts } from "../_services/ProductService";
import { heroSlides, sneakers } from "../_utils/MockingData";

import HeroCarousel from "../_components/(site)/HeroCarousel/HeroCarousel";
import ProductsGrid from "../_components/(site)/Products/ProductsGrid";

const Home = () => {
    const user = useStoredUser();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>();
    const [itemsOnPage, setItemsOnPage] = useState<number>(8);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {}, [products]);

    useEffect(() => {
        const getProductsInit = async () => {
            if (user) {
                if (user.token) {
                    const query = { sortBy, isAscending, currentPage, itemsOnPage };

                    const result: any = await getProducts(user.token, query);

                    if (result.data) {
                        if (Array.isArray(result.data.data)) {
                            setProducts(result?.data.data);
                            setIsLoading(false);
                        } else {
                            toast.warning("A server error has occurred!");
                            setIsLoading(false);
                        }
                    } else if (typeof result === "string") {
                        toast.warning("Unable to connect to API");
                        setIsLoading(false);
                    } else {
                        toast.warning("A server error has occurred!");
                        setIsLoading(false);
                    }
                } else {
                    toast.warning("A server error has occurred!");
                    setIsLoading(false);
                }
            }
        };
        getProductsInit();
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
