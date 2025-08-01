import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { products } from "@/utils/constants/constant";
import { productss } from "@/utils/constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Common Card Component
export interface ProductCardProps {
  product: {
    id: number;
    img: string;
    hoverImg?: string;
    discount: string;
    name: string;
    oldPrice: string;
    newPrice: string;
  };
  isMobile?: boolean;
  hovered: number | null;
  setHovered: (id: number | null) => void;
  index: number;
}

export const ProductCardItem = ({ product, isMobile = false, hovered, setHovered, index }: ProductCardProps) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Card */}
      <div
        className="overflow-hidden h-100 shadow relative group bg-white flex-1 flex flex-col"
        onMouseEnter={() => setHovered(product.id)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Discount Badge - Only show on desktop */}
        {!isMobile && (
          <span className="absolute top-3 left-3 bg-[#a67c00] text-white text-sm font-semibold px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
        
        {/* Icons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-all duration-300'}`}>
          <button className="bg-white shadow p-2 rounded hover:bg-gray-100">
            <FaHeart size={20} className="text-gray-700" />
          </button>
          <button className="bg-white shadow p-2 rounded hover:bg-gray-100">
            <IoMdRefresh size={20} className="text-gray-700" />
          </button>
        </div>
        
        {/* Image */}
        <img
          src={
            index === products.length - 1
              ? product.img
              : hovered === product.id
              ? product.hoverImg
              : product.img
          }
          alt={product.name}
          className={`w-full ${isMobile ? 'h-auto' : 'h-full'} object-cover`}
        />
        
        {/* Buttons */}
        <div className={`absolute bottom-0 left-0 right-0 flex justify-center gap-4 py-3 ${isMobile ? '' : 'opacity-0 group-hover:opacity-100 transition-all duration-300'}`}>
          <button className="bg-black text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-gray-800">
            <BsCart /> Add to cart
          </button>
          {!isMobile && (
            <button className="bg-black text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-gray-800">
              <AiOutlineEye /> Quick view
            </button>
          )}
        </div>
      </div>
      
      {/* Product Info BELOW the card */}
      <div className="mt-4">
        <h3 className="text-gray-800 font-medium text-lg hover:text-[#a67c00] ">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-gray-400 line-through text-sm">
            {product.oldPrice}
          </p>
          <p className="text-[#a67c00] font-bold text-lg">
            {product.newPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="md:p-6 p-0">
      <h2 className="text-3xl font-bold text-center mt-18 md:mt-22">Trending Products</h2>
      <p className="text-center mb-8">Top view in this week</p>
      
      {/* Swiper for mobile, grid for desktop */}
      <div className="block md:hidden ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={false}
          className=" w-full"
        >
          {productss.map((product, idx) => (
            <SwiperSlide key={product.id} className="!w-full p-6">
              <ProductCardItem
                product={product}
                isMobile={true}
                hovered={hovered}
                setHovered={setHovered}
                index={idx}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Grid for desktop */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-6">
        {products.map((product, idx) => (
          <div key={product.id} className="flex flex-col h-full">
            <ProductCardItem
              product={product}
              isMobile={false}
              hovered={hovered}
              setHovered={setHovered}
              index={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
