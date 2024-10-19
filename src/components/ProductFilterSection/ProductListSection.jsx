import React from "react";
import FilterSidebar from "./FilterSidebar";

const filters = [
  "Type of Plants",
  "Price",
  "Nursery",
  "Ideal Plants Location",
  "Indoor/ Outdoor",
  "Maintenance",
  "Plant Size",
  "Water Schedule",
  "Color",
  "Seasonal",
  "Light Efficient",
];

function ProductListSection() {
  return (
    <div className="m-4 grid grid-cols-[25%,75%] gap-4">
      <div className=" ml-8">
        <FilterSidebar filters={filters}/>
      </div>
      <div className="border-2 border-purple-800 mr-8">
        
      </div>
    </div>
  );
}

export default ProductListSection;
