import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setCurrentPage,
} from "../toolkit/app/product/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const { filteredProducts, searchQuery, currentPage, productsPerPage } =
    useSelector((state) => state.products);

  const handleSearch = (e) => dispatch(setSearchQuery(e.target.value));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

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
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
            />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product, index) => (
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

        <div className="mt-10 flex justify-center items-center flex-wrap gap-2">
          <div className="hidden md:flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full border ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => dispatch(setCurrentPage(num))}
                className={`px-4 py-2 rounded-full border ${
                  num === currentPage
                    ? "bg-teal-500 text-white border-teal-500"
                    : "bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full border ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition"
              }`}
            >
              Next
            </button>
          </div>

          <div className="flex md:hidden gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-full border ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition"
              }`}
            >
              Prev
            </button>

            <span className="px-3 py-2 rounded-full bg-teal-500 text-white font-semibold">
              {currentPage}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-full border ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white transition"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
