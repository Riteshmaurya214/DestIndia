import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

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




export default function BorderLessCart({item , idx,}) {
  const [liked, setLiked] = useState(false);

    const img = {    women1 
                    ,women2 
                    ,women3 
                    ,women4 
                    ,women5 
                    ,men1 
                    ,men2 
                    ,men3 
                    ,men4 
                    ,men5 
                    ,kids1 
                    ,kids2 
                    ,kids3 
                    ,kids4 
                    ,kids5 
                    ,beauty1 
                    ,beauty2 
                    ,beauty3 
                    ,beauty4 
                    ,beauty5 
                    ,home1 
                    ,home2 
                    ,home3 
                    ,home4 
                    ,home5 
                    ,bag1 
                    ,bag2 
                    ,bag3 
                    ,bag4 
                    ,bag5 
                    ,shoe1 
                    ,shoe2 
                    ,shoe3 
                    ,shoe4 
                    ,shoe5 
                
                    }

                    const Navigate = useNavigate();

  return (
    <div className="flex justify-center ">

 
    <div key={idx} className=" 
      w-[180px] sm:w-[180px] md:w-[200px] lg:w-[230px] xl:w-[260px] 
      rounded-md  m-2 bg-white relative flex flex-col
      transition-all 
    ">
   
     

      {/* Image */}
      <div className="w-full pt-0.5 px-0.5 sm:pt-1 sm:px-1 md:pt-2 md:px-2 aspect-[3/4] overflow-hidden rounded-md">
  <img
    src={img[item.img]}
    alt="Product"
    className="object-cover w-full h-full rounded-md"
     onClick={()=>{Navigate(`/productDetails/${item.category}/${item.id}`)}}
  />
</div>


      {/* Content */}
      <div className="p-2  sm:p-3 flex flex-col flex-grow">
        <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
         {item.brand}
        </h2>
        <p className="text-gray-600 text-[9px] sm:text-xs md:text-sm mt-1 flex-grow">
         {item.title}
        </p>

    
        <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
          <span className="text-xs sm:text-sm md:text-base font-bold text-black">
            ₹{item.price}
          </span>
          <span className="line-through text-gray-400 text-[9px] sm:text-xs md:text-sm">
            ₹{item.oldPrice}
          </span>
          <span className="text-green-500 text-[9px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
            {item.discount}
          </span>
        </div>
        <div className="mt-2 ">
            <p className="text-xs inline  px-3 py-0.5 rounded lg:text-sm bg-gray-300 ">{item.rating}</p>
            <span className="text-xs text-gray-400  pl-2">(5)</span>
            
        </div>
        <span className="pt-2 text-red-500 text-xs">Limited Stock</span>
      </div>
    </div>
       </div>
  );
}
