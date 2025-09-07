import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCart"; 
import data from "../Context/product"; 
import { Link } from "react-router-dom";
import FilterSidebar from "../Components/FilterSidebar";
import { useState } from "react";
import BorderLessCart from "../Components/BorderLessCart";








export default function CategoryPage() {
  const { id } = useParams();

  function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


}


  // Products nikalna category (id) ke basis pe


  const categories = Object.keys(data);


    const products = data[id] || [];

  const [product , setProduct ] = useState(products);


  return (
    <div className="">
   
      

       <div className="border-gray-400 border-t-1 border-b-1 my-4 md:my-5  py-2 md:py-4 flex justify-evenly items-center px-1 lg:px-2">
       {categories.map((cat) => (
  <Link
  key={cat}
  to={`/categorypage/${cat}`}
  className={`text-[9px] sm:text-xs lg:text-sm whitespace-nowrap inline-block py-1 
    ${id === cat ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"}`}
>
  {capitalize(cat)}'s{" "}
  <span className="hidden md:inline-block whitespace-nowrap">Fashion</span>
</Link>
        ))}
      </div>


      <div className="sm:flex sm:flex-cols justify-evenly">


        <FilterSidebar products = {product} idcat = {id} />

      
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
                 {products.length > 0 ? (
                   products.map((p) => <BorderLessCart item={p} />)
                 ) : (
                   <p>No products found for this category.</p>
                 )}
        </div>


      </div>
    
     
    </div>
  );
}
