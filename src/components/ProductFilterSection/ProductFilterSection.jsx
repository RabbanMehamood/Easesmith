import React from "react";
import FilterSidebar from "./FilterSidebar";
import ProductList from "../productSection/ProductList";

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

const products = [
  {
    id: 1,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 3,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 4,
    name: "Snake Plant",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 5,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 6,
    name: "Snake Plant",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 7,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 8,
    name: "Snake Plant",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 9,
    name: "Monstera",
    description: "Indoor Plant, Low maintenance",
    price: 299,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
];

function ProductFilterSection() {
  return (
    <div className="grid grid-cols-[25%,75%] gap-4">
      {/* Product Filter Section */}
      <div className=" pt-2 ml-12">
        <FilterSidebar filters={filters} />
      </div>
      {/* Product Display Sort Section */}
      <div className="mr-12">
        <div className="p-4">
          <label className="pr-2 text-[#6a6a6a]">300 products</label>
          <select
            id="products"
            className="bg-[#165315] text-white font-bold text-center  p-1 pr-8"
          >
            <option className="selected">SORT BY</option>
          </select>
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductFilterSection;
