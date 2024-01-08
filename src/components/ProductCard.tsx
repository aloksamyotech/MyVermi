"use client";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { myCart } from "./constants/constants";

const ProductCard = ({ product, getCartValue }) => {
  const [cartData, setCartData] = useState();
  const [added, setAdded] = useState(true);
  const [value, setValue] = useState(0);

  const addToCart = (product: any) => {
    let cart: any = [];
    let cartData = localStorage.getItem(myCart.myCart);
    if (cartData) {
      cartData = JSON.parse(cartData);
      cart = cartData;
      cart?.push(product);
      setCartData(cart);
      localStorage.setItem(myCart.myCart, JSON.stringify(cart));
    } else {
      localStorage.setItem(myCart.myCart, JSON.stringify([product]));
    }

    getCartValue();
  };

  const removeToCart = (product: any) => {
    let index;
    for (let i = 0; i < cartData?.length; i++) {
      let item = cartData[i];
      if (item.id === product.id) {
        index = i;
        break;
      }
    }

    let newArray = [
      ...cartData?.slice(0, index),
      ...cartData?.slice(index + 1),
    ];
    localStorage.setItem(myCart.myCart, JSON.stringify(newArray));
    let updatedCart: any = localStorage.getItem(myCart.myCart);
    updatedCart = JSON.parse(updatedCart);
    setCartData(updatedCart);
    getCartValue();

  };

  const checkButton = () => {
    let value = 0;
    cartData?.forEach((item) => {
      if (item?.id === product?.id) {
        value++;
      }
    });
    setValue(value);
    setAdded(value === 0);
  };

  useEffect(() => {
    checkButton();
  }, [cartData]);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-8 bg-blue-100">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 py-4 text-center">
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.tag1}
          </span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {product.tag2}{" "}
          </span>
        </div>
        <div className="text-center mb-2">
          <button
            type="button"
            className=" mr-3 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </button>

          {added ? (
            <button
              type="button"
              className="mr-3 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <>
              <button onClick={() => addToCart(product)}>+</button>
              &nbsp;
              {value}
              &nbsp;
              <button
                onClick={() => {
                  removeToCart(product);
                }}
              >
                -
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
