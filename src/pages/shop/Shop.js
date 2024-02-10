import React, { useContext } from "react";
import { PRODUCTS } from "../../products.js";
import { ShopContext } from "../../components/context/ShopContextProvider.js";
import Product from "./Product.js";
const Shop = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex-col justify-center items-center">
      <div className="">
        <h1 className="font-bold font-sans text-2xl">PedroTech Shop</h1>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
