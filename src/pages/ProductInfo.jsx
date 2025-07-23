import { useParams } from "react-router-dom";
import { productsData } from "../data/db";
import Rating from "@mui/material/Rating";
import Swal from "sweetalert2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function ProductInfo() {
  const { id } = useParams();
  const product = productsData.find((p) => p._id === parseInt(id));

  const [selectedImg, setSelectedImg] = useState(product?.img);
  const [count, setCount] = useState(1);

  if (!product) {
    return <h2 className="text-center pt-32">Product not found</h2>;
  }

  const handleIncrement = () => {
    if (count < product.quantity) {
      setCount((prev) => prev + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Limit reached",
        text: `Only ${product.quantity} items available!`,
        confirmButtonColor: "#14b8a6",
      });
    }
  };

  const handleDecrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    Swal.fire({
      icon: "info",
      title: "Feature not implemented",
      text: "This is just a UI demo for now.",
      confirmButtonColor: "#14b8a6",
    });
  };

  return (
    <section className="pt-32 pb-16 bg-white min-h-screen px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img
          src={selectedImg}
          alt={product.title}
          className="w-full object-contain rounded-xl shadow max-h-[450px]"
        />

        <div className="space-y-5">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <div className="flex items-center gap-3 text-teal-500">
              <FavoriteIcon fontSize="medium" className="cursor-pointer" />
              <ShoppingCartIcon
                fontSize="medium"
                className="cursor-pointer"
                onClick={handleAddToCart}
              />
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          <Rating value={product.rating} precision={0.1} readOnly />

          <p className="text-sm text-gray-500">
            In Stock: {product.quantity} pcs
          </p>

          <div className="flex items-center gap-2 mt-2">
            {product.colors.map((colorObj, i) => (
              <img
                key={i}
                src={colorObj.img}
                alt={colorObj.color}
                onClick={() => setSelectedImg(colorObj.img)}
                className={`w-14 h-14 border-2 rounded-xl object-contain cursor-pointer hover:scale-105 transition ${
                  selectedImg === colorObj.img
                    ? "border-teal-500"
                    : "border-gray-300"
                }`}
                title={colorObj.color}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleDecrement}
              className="text-xl w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
            >
              −
            </button>
            <span className="text-xl font-semibold">{count}</span>
            <button
              onClick={handleIncrement}
              className="text-xl w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <div className="pt-2">
            <span className="text-gray-500 line-through mr-2">
              ${(product.price * count).toFixed(2)}
            </span>
            <span className="text-teal-600 font-bold text-2xl">
              ${(product.price * 0.9 * count).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
