import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Star, Truck, RotateCcw, MapPin } from "lucide-react";
import { BiSolidOffer } from "react-icons/bi";
import { GrShareOption } from "react-icons/gr";
import Ratting from "../Components/Ratting";
import AllProductCarts from "../Components/AllProductCarts";
import AllBorderLessCart from "../Components/AllBorderLessCart";

import Products from "../Context/product";


 


import women1 from "../assets/women1.png";
import women2 from "../assets/women2.png";
import women3 from "../assets/women3.png";
import women4 from "../assets/women4.png";
import women5 from "../assets/women5.png";

import men1 from "../assets/men1.png";
import men2 from "../assets/men2.png";
import men3 from "../assets/men3.png";
import men4 from "../assets/men4.png";
import men5 from "../assets/men5.png";

import kids1 from "../assets/kid1.png";
import kids2 from "../assets/kid2.png";
import kids3 from "../assets/kid3.png";
import kids4 from "../assets/kid4.png";
import kids5 from "../assets/kid5.png";

import beauty1 from "../assets/beauty1.png";
import beauty2 from "../assets/beauty2.png";
import beauty3 from "../assets/beauty3.png";
import beauty4 from "../assets/beauty4.png";
import beauty5 from "../assets/beauty5.png";

import home1 from "../assets/h1.png";
import home2 from "../assets/h2.png";
import home3 from "../assets/h3.png";
import home4 from "../assets/h4.png";
import home5 from "../assets/h5.png";

import bag1 from "../assets/b1.png";
import bag2 from "../assets/b2.png";
import bag3 from "../assets/b3.png";
import bag4 from "../assets/b4.png";
import bag5 from "../assets/b5.png";

import shoe1 from "../assets/f1.png";
import shoe2 from "../assets/f2.png";
import shoe3 from "../assets/f3.png";
import shoe4 from "../assets/f4.png";
import shoe5 from "../assets/f5.png";

import data from "../context/product.json";
import ShopMore from "../Components/ShopeMore";

export default function CartDetails() {
  const { category, id } = useParams();
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

    const productss = data[id] || [];
  
  

  const imgSet = {
    women: [women1, women2, women3, women4, women5],
    men: [men1, men2, men3, men4, men5],
    kids: [kids1, kids2, kids3, kids4, kids5],
    beauty: [beauty1, beauty2, beauty3, beauty4, beauty5],
    home: [home1, home2, home3, home4, home5],
    bags: [bag1, bag2, bag3, bag4, bag5],
    footwear: [shoe1, shoe2, shoe3, shoe4, shoe5],
  };

  const product = data[category]?.find((item) => item.id === Number(id));
  if (!product)
    return (
      <h2 className="p-10 text-center text-red-500">Product not found</h2>
    );

  const galleryImages = [
    imgSet[category][product.imgIndex-1 || 0],
    imgSet[category][1],
    imgSet[category][2],
    imgSet[category][3],
    imgSet[category][4],
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 ">
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-5 md:h-[100vh]">
        {/* Images */}
        <div className="grid grid-cols-6 md:h-80  gap-2 ">

          <div className="col-span-3">
          <img
            src={galleryImages[id-1]}
            alt="Product main"
            className=" border border-gray-100 shadow-md rounded-md h-50 sm:h-72 w-full object-cover object-top  transition-transform duration-500 ease-in-out hover:scale-105"
          />
          </div>  
          <div className="col-span-3">
          <img
            src={galleryImages[id-1]}
            alt="Product main"
            className=" border border-gray-100 shadow-md rounded-md h-50 sm:h-72 w-full object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
          />
          </div>  

          <div className="col-span-2">
                <img
            src={galleryImages[id-1]}
            alt="Product"
            className="  border border-gray-100 shadow-md rounded-md h-40 md:h-52 w-full object-cover  transition-transform duration-500 ease-in-out hover:scale-105 object-left"
          />
          </div>
          
          <div className="col-span-2">
                <img
            src={galleryImages[id-1]}
            alt="Product"
            className="  border border-gray-100 shadow-md rounded-md h-40 md:h-52 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 object-left"
          />
          </div>

          <div className="col-span-2">
                <img
            src={galleryImages[id-1]}
            alt="Product"
            className="  border border-gray-100 shadow-md rounded-md h-40 md:h-52 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 object-left"
          />
          </div>
        </div>

        {/* Info Section */}
        <div className="ml-4">
          <h1 className="text-3xl font-semibold">{product.brand}</h1>
          <p className="text-gray-500 mt-1">{product.title}</p>
          <p className="text-sm text-gray-400 mt-1">{product.department}</p>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold">₹{product.price}</span>
            <span className="line-through text-gray-400">₹{product.oldPrice}</span>
            <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
              {product.discount} 
            </span>
          </div>

          {/* Stock + Rating */}
          <div className="mt-3 flex items-center gap-4">
           
            <span className="flex items-center bg-green-600 text-white px-4 gap-1 py-1 rounded text-sm">
              {product.rating} <Star size={16} className="ml-1" /> 
            </span>
            <span className="text-xs sm:text-sm  text-gray-500"> 6 Rating & 2 Reviews</span>
          </div>



          {/* offfer  */}

          <div className="border border-b-1 border-gray-200 w-full my-3 mt-10"></div>
          <div className=" whitespace-nowrap flex justify-between items-center gap-2 ">
            <div className="flex gap-1.5">
                 <BiSolidOffer className="text-green-500" size={25} />
            <span className=" whitespace-nowrap ">Get this for Only <span className="text-green-500 font-semibold pl-1"> &#8377;{(Math.round(product.price/6))}</span> </span>
            </div>
            <div className="text-pink-500 font-semibold">
                View Offer
            </div>
           

          </div>

          <div className="border border-b-1 mb-5 border-gray-200 w-full my-3"></div>

            {/* {more color } */}
{/* More Colour */}
<div className="mt-6">
  <span className="font-semibold block mb-2">More Colour</span>
  <img
    src={galleryImages[id]}
    className="h-12 w-12 rounded-md border object-contain"
    alt="more colour"
  />
</div>

{/* Size */}
{product.size && (
  <div className="mt-6">
    <div className="flex justify-between">
      <h3 className="font-medium mb-2">Select Size</h3>
      <button className="text-pink-600 text-sm">Size Guide</button>
    </div>
    <div className="flex gap-3 flex-wrap">
      {product.size.map((s, i) => (
        <button
          key={i}
          onClick={() => setSelectedSize(s.label)}
          disabled={!s.available}
          className={`px-4 py-2 border rounded-lg transition ${
            !s.available
              ? "text-gray-400 line-through cursor-not-allowed"
              : selectedSize === s.label
              ? "bg-black text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
    <p className="text-xs text-gray-500 mt-2">
      Model is 6&apos;0&quot;/185cms and is wearing size M
    </p>
  </div>
)}


          {/* Color */}
          {product.color && (
            <div className="mt-6">
              <h3 className="font-medium mb-2">Available Colors</h3>
              <div className="flex gap-3">
                {product.color.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 border rounded-lg transition ${
                      selectedColor === c
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border border-b-1 border-gray-200 w-full my-3"></div>

          {/* Buttons */}
          <div className="my-6 flex gap-4">

             <button
            
              className="p-3 border rounded-xl hover:bg-gray-100 "
            >
              <GrShareOption
                size={22}
                className={ "text-gray-600"}
              />
            </button>  

               <button
              onClick={() => setLiked(!liked)}
              className="p-3 border rounded-xl hover:bg-gray-100 "
            >
              <Heart
                size={22}
                className={liked ? "fill-pink-600 text-pink-600" : "text-gray-600"}
              />
            </button>  

            <button className="flex-1   py-3 border border-pink-500 text-pink-500 rounded-xl font-medium shadow hover:bg-pink-500 hover:text-white">
              Buy Now
            </button>
            <button className="flex-1 border bg-pink-600  text-white  py-3 rounded-xl font-medium ">
              Add To Bag
            </button>
           
          </div>
             <div className="border border-b-1 border-gray-200 w-full my-3"></div>

          {/* Product Details */}
          <div className="mt-8">
            <h3 className="font-medium text-lg">Product Details</h3>
            <p className="text-gray-600 mt-2">
              Channel a winning style by wearing this regular fit t-shirt. Premium quality {product.department} by {product.brand}.
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Fit:</span> Regular
            </p>
            <p className="text-sm">
              <span className="font-medium">Pattern:</span> Solid
            </p>
          </div>

           <div className="border border-b-1  border-gray-200 w-full my-5"></div>

          {/* Delivery, COD, Return */}
          <div className="mt-8 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Ship To: Delhi, 110001
              </span>
              <button className="text-pink-600">Change Pincode</button>
            </div>
            <p className="flex items-center gap-2">
              <Truck size={16} /> Delivery by 9th Apr
            </p>
            <p className="flex items-center gap-2 text-green-600">
              Cash on Delivery | Available
            </p>
            <p className="flex items-center gap-2">
              <RotateCcw size={16} /> 7 Days Return and Replacement available
            </p>
          </div>

          {/* Seller */}
          <div className="border rounded-md px-4 py-3 mt-4 text-sm">
            Sold By <span className="font-medium">NIKE</span>
          </div>
        </div>
      </div>





      {/* Reviews */}
          <Ratting rat = {product.rating}/>

          <ShopMore/>

          <AllBorderLessCart SectionName={"Women's Fashion"} ProductData = {Products.women}/>
         <AllBorderLessCart SectionName={"Men's Fashion"} ProductData = {Products.men}/>
         
          
      </div>
  
  );
}
