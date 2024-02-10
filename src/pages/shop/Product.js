import React, { useContext } from "react";
import { ShopContext } from "../../components/context/ShopContextProvider.js";

const Product = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div
      key={props.data.id}
      className="flex-col justify-center w-[300px] md:w-[350px] text-black items-center border-2 border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-gray-50"
    >
      <h3 className="text-2xl font-bold flex justify-center">{props.name}</h3>
      <img src={props.data.image} className="h-[100px] w-[500px]"></img>
      <p>{props.data.name}</p>
      <p>${props.data.price}</p>
      <button
        onClick={() => {
          addToCart(props.data.id);
        }}
        className="border-solid border-2 bg-gray-500 text-white rounded-md p-2"
      >
        Add to cart{" "}
        {cartItems[props.data.id] > 0 && `(${cartItems[props.data.id]})`}
      </button>
    </div>
  );
};

export default Product;
