import React from "react";
import { IoMdCart } from "react-icons/io";

type Props = {};

const AddToCartButton = (props: Props) => {
    return (
        <button
            type="button"
            className="w-full flex items-center mt-auto justify-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-semibold text-white rounded-xl duration-200"
        >
            <IoMdCart size={"100%"} className="w-[20px] h-[20px]" />
            Add to cart
        </button>
    );
};

export default AddToCartButton;
