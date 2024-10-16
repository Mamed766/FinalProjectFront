"use client";
import React, { useEffect, useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Loading from "../loading";
import { getCookie } from "cookies-next";
import axios from "axios";

interface CartItem {
  productId?: string;
  quantity?: number;
  title?: string;
  price?: number;
  image1?: string;
}

const page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = getCookie("token");
        console.log("Frontend'deki token:", token);

        const response = await axios.get("http://localhost:3001/api/v2/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setCartItems(response.data.items ?? []);
        console.log("API Response CARD:", response.data);
      } catch (error: any) {
        console.error(
          "Sepet alınırken hata oluştu:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleDelete = async (productId: string | undefined) => {
    try {
      const token = getCookie("token");

      await axios.delete("http://localhost:3001/api/v2/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
        withCredentials: true,
      });

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId)
      );
    } catch (error: any) {
      console.error(
        "Ürün silinirken hata oluştu:",
        error.response?.data || error.message
      );
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="pt-[14rem] flex justify-center items-center text-[26px]">
        {" "}
        Your cart is empty
      </div>
    );
  }
  return (
    <div>
      <div className="pt-16">
        <Breadcrump title="Cart" bread1="Home" />
      </div>
      <div>
        <>
          <div className="pt-[12rem] flex flex-col gap-2">
            <div className="flex justify-center text-[36px]">My Cart!</div>
            <div className=" max-w-[1280px] flex gap-2 flex-wrap mx-auto">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center justify-center ">
                      <p className="font-bold">Quantity: {item?.quantity}</p>
                      {item?.title && <p>title: {item?.title}</p>}
                      {item?.price && item?.quantity && (
                        <p>Total Price: {item.price * item.quantity}</p>
                      )}
                    </div>
                    {item?.image1 && (
                      <img
                        src={`http://localhost:3001/${item?.image1}`}
                        alt={item.title}
                        className="max-w-[15rem]"
                      />
                    )}
                    <button
                      className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(item?.productId)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>Your Cart is empty</p>
              )}
            </div>

            <div className="flex justify-center ">
              <button className="bg-black p-2 rounded text-white hover:bg-white hover:text-black duration-300">
                Checkout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default page;
