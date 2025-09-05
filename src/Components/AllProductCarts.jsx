import React from "react";
import data from "../context/product.json";
import ProductCart from "./ProductCart";

export default function AllProductCarts({SectionName, ProductData}) {


  return (

  
    <div className="mt-10 lg:mt-13">
            <h1 className="text-center font-medium pb-4  text-2xl lg:font-semibold" >{SectionName}</h1>
        <div className="grid grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 xl:grid-cols-5">
  {ProductData.map((item, idx) => (
    <ProductCart key={idx} item={item} />
  ))}
</div>
    </div>
  
  );
}
