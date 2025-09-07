import React from 'react';
import e from "../assets/Ethnic.png";
import w from "../assets/Western.png";
import m from "../assets/Mens.png";
import f from "../assets/Footwear.png";
import h from "../assets/HomeDecor.png";
import b from "../assets/Beauty.png";
import a from "../assets/Accessories.png";
import { useNavigate } from 'react-router-dom';


export default function Category() {
  const categories = [
    { id:'women', name: 'Ethnic Wear', img: e },
    { id:'women', name: 'Western Wear', img: w },
    { id:'men', name: 'Mens Wear', img: m },
    { id:'footwear', name: 'Footwear', img: f },
    { id:'home', name: 'Home Decor', img: h },
    { id:'beauty', name: 'Beauty', img: b },
    { id:'bags', name: 'Accessories', img: a },
  ];

  const Navigate = useNavigate();

  return (
    <div className="bg-white py-3 sm:py-4 md:py-5 lg:py-6">
      <div className="w-full overflow-x-auto overflow-y-hidden  scrollbar-hide">
        <div className="flex justify-evenly min-w-max px-1 sm:px-2">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="text-center mx-1 flex-shrink-0 
                         w-20 h-24 
                         sm:w-24 sm:h-28 
                         md:w-28 md:h-32 
                         lg:w-36 lg:h-40 
                         xl:w-40 xl:h-44 
                         2xl:w-[162px] 2xl:h-[186px]"
            >
              {/* Card container */}
              <div className="h-[80%] relative rounded-t-[50%] rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl bg-pink-100 flex ">
                <img
                  onClick = {()=> Navigate(`/categorypage/${cat.id}`) }
                  src={cat.img}
                  alt={cat.name}
                  className="
                        categoryImage
                        
                        object-contain
                         "
                />
              </div>
              
              {/* Text */}
              <p className="mt-1 sm:mt-1.5 lg:mt-2 text-gray-700 font-medium 
                           text-xs 
                           sm:text-xs 
                           md:text-sm 
                           lg:text-sm 
                           xl:text-sm 
                           2xl:text-base 
                           leading-tight">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}