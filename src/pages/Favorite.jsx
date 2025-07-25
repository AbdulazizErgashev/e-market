import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../toolkit/app/product/productSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion, AnimatePresence } from "framer-motion";

export default function Favorite() {
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    const likedProducts = allProducts.filter((p) => likedIds.includes(p._id));
    setFavorites(likedProducts);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [allProducts]);

  const handleUnlike = (id) => {
    dispatch(toggleLike(id));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="pt-32 pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
          My Favorites
        </h2>

        {favorites.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500"
          >
            You haven’t liked any product yet.
          </motion.p>
        ) : isMobile ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {favorites.map((product) => (
                <motion.div
                  key={product._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="relative flex flex-col items-center bg-white p-4 rounded-2xl shadow"
                >
                  <FavoriteIcon
                    className="absolute top-3 right-3 text-red-500 text-2xl cursor-pointer"
                    onClick={() => handleUnlike(product._id)}
                  />
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-40 object-contain mb-3"
                  />
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="font-bold text-teal-600 mt-2">
                    ${product.price}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {favorites.map((product) => (
                <motion.div
                  key={product._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="relative flex items-center justify-between bg-white p-4 rounded-2xl shadow"
                >
                  <FavoriteIcon
                    className="absolute top-3 right-4 text-red-500 text-2xl cursor-pointer"
                    onClick={() => handleUnlike(product._id)}
                  />
                  <div className="flex items-center gap-4">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-24 h-24 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                      <p className="text-gray-500">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-teal-600 font-bold text-lg">
                    ${product.price}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
