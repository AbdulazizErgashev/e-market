import { productsData } from "../data/db";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Product() {
  return (
    <section className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-10">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-48 object-contain transition-transform duration-300 hover:scale-90"
              />

              <h3 className="text-xl font-semibold text-[#1f2937] text-center">
                {product.title}
              </h3>

              <span className="text-sm text-gray-500">{product.category}</span>

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
