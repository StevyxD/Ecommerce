import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../components/context/ShopContextProvider";

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  return (
    <div>
      <div className="grid grid-cols-3">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div
                key={product.id}
                className="flex-col justify-center w-[300px] md:w-[350px] text-black items-center border-2 border-gray-200 p-4 m-4 rounded-lg shadow-lg bg-gray-50"
              >
                <h3 className="text-2xl font-bold flex justify-center">
                  {product.name}
                </h3>
                <img src={product.image} className="h-[100px] w-[500px]"></img>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>Quantity: {cartItems[product.id]}</p>
                <button
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  className="border-solid border-2 bg-gray-500 text-white rounded-md p-2"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  className="border-solid border-2 bg-gray-500 text-white rounded-md p-2"
                >
                  Remove from cart
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
