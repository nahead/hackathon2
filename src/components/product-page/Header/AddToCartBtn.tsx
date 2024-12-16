"use client";

import React from "react";
import { Product } from "@/types/product.types";
import Link from "next/link";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  return (
    <a href="/cart" className=" flex justify-center items-center bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"> <button
      type="button"
      className=""
    >
      Add to Cart
    </button></a>
  );
};

export default AddToCartBtn;
