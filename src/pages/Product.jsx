import { productsData } from "../data/db";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";

export default function Product() {
  return (
    <section className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-10">
          All Products
        </h2>

        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
            />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-4 right-4 cursor-pointer text-red-500">
                {product.like ? (
                  <FavoriteIcon fontSize="medium" />
                ) : (
                  <FavoriteBorderIcon fontSize="medium" />
                )}
              </div>

              <img
                src={product.img}
                alt={product.title}
                className="h-48 object-contain transition-transform duration-300 hover:scale-90"
              />

              <h3 className="text-xl font-semibold text-[#1f2937] text-center">
                {product.title}
              </h3>

              <span className="text-sm text-gray-500">{product.category}</span>

              <Rating
                name="product-rating"
                value={product.rating}
                precision={0.1}
                readOnly
              />

              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-3">
                  <span className="line-through text-gray-400 font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-teal-600 font-bold">
                    ${(product.price * 0.9).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="mt-4 px-4 py-2 flex items-center gap-2 border border-teal-500 text-teal-600 rounded-full hover:bg-teal-500 hover:text-white transition">
                <ShoppingCartIcon />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
