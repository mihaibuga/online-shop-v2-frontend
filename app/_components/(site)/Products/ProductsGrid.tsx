import Image from "next/image";
import React from "react";

type ProductType = {
    src?: string;
    name: string;
    description: string;
    price: number;
};

interface IProps {
    sectionTitle: string;
    products: ProductType[];
}

const ProductsGrid = ({ sectionTitle, products }: IProps) => {
    return (
        <div className="block font-[sans-serif] bg-gray-100">
            <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-12">{sectionTitle}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                    {products &&
                        products.map((product, index) => (
                            <div
                                key={index}
                                className="group bg-white border rounded-2xl p-5 cursor-pointer hover:border-blue-600 transition-all relative duration-200"
                            >
                                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        className="fill-gray-800 inline-block"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000"
                                        ></path>
                                    </svg>
                                </div>

                                <div className="relative w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                    {product.src && (
                                        <Image
                                            src={product.src}
                                            alt={`Product ${index + 1}`}
                                            className="h-full w-full object-contain group-hover:scale-[1.03] duration-200"
                                            quality={100}
                                            fill
                                            priority
                                            sizes="100%"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-lg font-extrabold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                                    <h4 className="text-lg text-gray-800 font-bold mt-4">${product.price}</h4>
                                </div>

                                <button
                                    type="button"
                                    className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg duration-200"
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;
