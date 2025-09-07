import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons

export default function FilterSidebar({products ,idcat}) {

  const [product , setProduct ] = useState(products);



  {console.log(product)}

  const [openSections, setOpenSections] = useState({
    department: false,
    brand: false,
    size: false,
    colour: false,
    price: false,
  });




  return (
    <div className="md:w-80 hidden md:block lg:w-84 border border-gray-200 rounded-lg p-4 bg-white m-2 shadow-sm text-black  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>

        <button className="text-sm text-gray-500 hover:underline">Clear All</button>
      </div>

     

        <div className=""> 

             {/* Active Filter  */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Department</h3>
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
          {idcat}’s Clothings
        </span>
      </div>

        
         {/* Department Section */}

      <div className="border-t py-2">
        <button
        
        >
          Department
       
        </button>

        
          
      
      </div>

      {/* Brand Section */}
      <div className="border-t py-2">
        <button
         
        >
          Brand
         
        </button>
      </div>

      {/* Size Section */}
      <div className="border-t py-2">
        <button
         
        >
          Size
         
        </button>
      </div>

      {/* Colour Section */}
      <div className="border-t py-2">
        <button>
          Colour
         
        </button>
      </div>

      {/* Price Section */}

      <div className="border-t py-2">
        <button>
          Price
         
        </button>
      </div>

        </div>
     
    </div>
  );
}
