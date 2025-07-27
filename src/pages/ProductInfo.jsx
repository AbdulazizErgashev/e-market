import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../toolkit/app/product/productSlice";
import Rating from "@mui/material/Rating";
import Swal from "sweetalert2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const product = allProducts.find((p) => p._id === parseInt(id));

  const [selectedImg, setSelectedImg] = useState(product?.img);
  const [count, setCount] = useState(1);

  if (!product) {
    return <h2 className="text-center pt-32 text-white">Product not found</h2>;
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
    <section className="bg-gray-900">
      <div className="pt-32 pb-16 min-h-screen px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ANIMATED IMAGE BLOCK */}
          <div className="relative w-full h-full min-h-[300px] max-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImg}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                src={selectedImg}
                alt={product.title}
                className="absolute w-full h-full object-contain rounded-2xl shadow-lg bg-white p-4"
              />
            </AnimatePresence>
          </div>

          {/* PRODUCT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-white"
          >
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold">{product.title}</h1>
              <div className="flex items-center gap-3 text-teal-400">
                <div
                  className="cursor-pointer"
                  onClick={() => dispatch(toggleLike(product._id))}
                >
                  {product.like ? (
                    <FavoriteIcon fontSize="medium" />
                  ) : (
                    <FavoriteBorderIcon fontSize="medium" />
                  )}
                </div>
                <ShoppingCartIcon
                  fontSize="medium"
                  className="cursor-pointer"
                  onClick={handleAddToCart}
                />
              </div>
            </div>

            <p className="text-gray-300">{product.description}</p>
            <p className="text-sm text-gray-400">
              Category: {product.category}
            </p>

            <Rating value={product.rating} precision={0.1} readOnly />

            <p className="text-sm text-gray-400">
              In Stock: {product.quantity} pcs
            </p>

            <div className="flex items-center gap-3 mt-3">
              {product.colors.map((colorObj, i) => (
                <img
                  key={i}
                  src={colorObj.img}
                  alt={colorObj.color}
                  onClick={() => setSelectedImg(colorObj.img)}
                  className={`w-14 h-14 border-2 rounded-xl object-contain cursor-pointer hover:scale-105 transition-all ${
                    selectedImg === colorObj.img
                      ? "border-teal-400"
                      : "border-gray-500"
                  }`}
                  title={colorObj.color}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handleDecrement}
                className="text-xl w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-800"
              >
                −
              </button>
              <span className="text-2xl font-semibold">{count}</span>
              <button
                onClick={handleIncrement}
                className="text-xl w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-800"
              >
                +
              </button>
            </div>

            <div className="pt-2">
              <span className="text-gray-400 line-through mr-3 text-lg">
                ${(product.price * count).toFixed(2)}
              </span>
              <span className="text-teal-400 font-bold text-3xl">
                ${(product.price * 0.9 * count).toFixed(2)}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
