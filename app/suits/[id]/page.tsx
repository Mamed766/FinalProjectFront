"use client";
import Breadcrump from "@/app/_components/breadcrump/Breadcrump";
import { useRequest } from "@/app/_http/axiosFetcher";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const SuitProducts = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({
    selectedSize: null,
    selectedColor: null,
    quantity: 1,
    stock: 0,
  });

  const [stock, setStock] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const colors = [
    { name: "Pink", colorCode: "bg-pink-500" },
    { name: "Purple", colorCode: "bg-purple-700" },
    { name: "Red", colorCode: "bg-red-600" },
    { name: "Yellow", colorCode: "bg-yellow-400" },
  ];

  const sizes = [4, 6, 8, 10];

  const { id } = useParams();

  const { data, isLoading, error } = useRequest(
    () => (id ? `suits/${id}` : null),
    {
      method: "GET",
      module: "suitApi",
    }
  );

  useEffect(() => {
    if (data && data.suit && data.suit.stock) {
      setStock(data.suit.stock);
    }
  }, [data]);

  const increaseQuantity = () => {
    setProductDetails((prevState) => ({
      ...prevState,
      quantity:
        prevState.quantity < prevState.stock
          ? prevState.quantity + 1
          : prevState.quantity,
    }));
  };

  const decreaseQuantity = () => {
    setProductDetails((prevState) => ({
      ...prevState,
      quantity:
        prevState.quantity > 1 ? prevState.quantity - 1 : prevState.quantity,
    }));
  };

  const handleAddToCart = async () => {
    try {
      const token = getCookie("token");
      const response = await axios.post(
        "http://localhost:3001/api/v2/cart/add",
        {
          productId: data?.suit?._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log("Gönderilen productId:", data?.collection?._id);
      console.log("Gönderilen token:", token);
      console.log("Gönderilen quantity:", 1);

      console.log("Eklenen data:", response.data);
      console.log("Veri:", data);
    } catch (error: any) {
      console.error(
        "Sepete eklerken hata oluştu:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const countdownDate = new Date("2024-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-[#BB9D7B]" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          )
        )}
      </>
    );
  };

  return (
    <div className="pt-20">
      <Breadcrump title="Shop" bread1="Top Wear" />
      <div className="bg-black">
        <div className="py-10 max-w-[1500px] mx-auto">
          <div className="flex gap-20 flex-wrap ">
            <div className="flex max-w-[50rem] flex-col gap-4">
              <Image
                alt=""
                src={`http://localhost:3001/${data && data?.suit.image1}`}
                height={1000}
                width={1000}
                quality={100}
                className="min-h-[50%] max-h-[80%] max-w-[100%] object-cover"
              />

              <Image
                alt=""
                src={`http://localhost:3001/${data && data?.suit.image2}`}
                height={1000}
                width={1000}
                quality={100}
                className="min-h-[50%] max-h-[80%] max-w-[100%] object-cover"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <h1 className="text-[50px] text-white">
                  {data && data.suit.title}
                </h1>
                <p className="text-white text-[20px]">
                  Our Price: ${data && data.suit.price}
                </p>
                <div className="flex">
                  {data && renderStars(data.suit.rating)}
                </div>
              </div>
              <div>
                <div className="border-y-[1px] mt-5 py-5 border-[#BB9D7B]/20 bg-black text-white">
                  <div className="mb-4">
                    <h3 className="mb-2">
                      Size:{" "}
                      <span className="text-[#BB9D7B]">
                        {selectedSize && selectedSize}{" "}
                      </span>
                    </h3>
                    <div className="flex gap-3">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-4 py-2 border ${
                            selectedSize === size.toString()
                              ? "border-white bg-[#BB9D7B]"
                              : "border-[#BB9D7B]"
                          }`}
                          onClick={() => setSelectedSize(size.toString())}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p>
                      InStock: <span className="text-[#BB9D7B]">{stock}</span>
                    </p>
                    {stock <= 0 && (
                      <p className="text-red-500 mt-2">Out of Stock</p>
                    )}
                  </div>

                  <div className="mb-4 mt-4">
                    <h3 className="mb-2">
                      Color:{" "}
                      <span className="text-[#BB9D7B]">
                        {selectedColor && selectedColor}{" "}
                      </span>
                    </h3>
                    <div className="flex items-center border-[#BB9D7B]">
                      {colors.map((color) => (
                        <div
                          key={color.name}
                          className="border-[1px] border-[#BB9D7B] flex items-center px-2 py-2"
                        >
                          <button
                            className={`w-5 h-5 rounded-full ${
                              color.colorCode
                            } ${
                              selectedColor === color.name
                                ? "border-2 border-gray-700"
                                : ""
                            }`}
                            onClick={() => setSelectedColor(color.name)}
                          ></button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <button
                        className="border border-[#BB9D7B] px-5 py-2"
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                      >
                        -
                      </button>
                      <span className="border border-[#BB9D7B] px-5 py-2">
                        {quantity}
                      </span>
                      <button
                        className="border border-[#BB9D7B] px-4 py-2"
                        onClick={increaseQuantity}
                        disabled={quantity >= stock}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="px-6 py-2 font-medium hover:bg-transparent duration-700 bg-[#BB9D7B] border-[#BB9D7B] text-white"
                      disabled={stock <= 0}
                    >
                      ADD TO CART
                    </button>
                    <button className="px-6 py-2 bg-transparent duration-700 hover:border-[#BB9D7B] border border-[#] text-white">
                      ADD TO WISHLIST
                    </button>
                  </div>

                  <div className="mt-6">
                    <p className="mb-2">Hurry up! Deals end up:</p>
                    <div className="flex gap-3">
                      <div className="border border-[#BB9D7B] p-2">{`${timeLeft.days} Days`}</div>
                      <div className="border border-[#BB9D7B] p-2">{`${timeLeft.hours} Hrs`}</div>
                      <div className="border border-[#BB9D7B] p-2">{`${timeLeft.minutes} Mins`}</div>
                      <div className="border border-[#BB9D7B] p-2">{`${timeLeft.seconds} Secs`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitProducts;