import React from "react";
import data from "../context/CategoryCartData";
import CategoryCart from "./CategoryCart";

export default function AllCategoryCarts() {
  return (
    <div className="grid
                     grid-cols-3
                     sm:grid-cols-3
                     md:grid-cols-4
                   
                     xl:grid-cols-6
                    my-1 sm:my-2 md:my-3 lg:my-4
                     ">
      {data.map((item, idx) => (

          <CategoryCart item={item} idx={idx} />
        
      ))}
    </div>
  );
}
