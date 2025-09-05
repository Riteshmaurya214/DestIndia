import React from "react";
import image2 from "../assets/CategoryCart1.png";
import data from "../Context/CategoryCartData.json"

import Category1 from "../assets/CategoryCart1.png";
import Category2 from "../assets/CategoryCart2.png";
import Category3 from "../assets/CategoryCart3.png";
import Category4 from "../assets/CategoryCart4.png";
import Category5 from "../assets/CategoryCart5.png";
import Category6 from "../assets/CategoryCart6.png";
import Category7 from "../assets/CategoryCart7.png";
import Category8 from "../assets/CategoryCart8.png";
import Category9 from "../assets/CategoryCart9.png";
import Category10 from "../assets/CategoryCart10.png";
import Category11 from "../assets/CategoryCart11.png";
import Category12 from "../assets/CategoryCart12.png";


export default function CategoryCart({item,idx}) {

    const img = {Category1 
                ,Category2 
                ,Category3 
                ,Category4 
                ,Category5 
                ,Category6 
                ,Category7 
                ,Category8 
                ,Category9 
                ,Category10
                ,Category11
                ,Category12}
  return (
    <div className="m-2 flex justify-center ">
      <div
        className="
          flex flex-col items-center justify-between  relative
          
          w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 
          h-[200px] sm:h-[230px] md:h-[250px] lg:h-[270px] xl:h-[300px] 
        
          bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-500
         
        "
      >
        {/* Image */}
       
        <img
          className="
            object-cover object-top 
            w-full
            h-[70%] 
            px-1 pt-1 
            md:px-2 md:pt-2
           
            
          "
          src={img[item.img]}
          alt="Category"
        />

        {/* Text */}
        <h1 className="text-[10px] sm:text-xs md:text-sm ">
          {item.title}
        </h1>
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
          UP TO {item.discount} OFF
        </h1>
        <p className="text-[9px] sm:text-xs md:text-sm mb-2 font-semibold  ">Shop Now</p>
      </div>
    </div>
  );
}
