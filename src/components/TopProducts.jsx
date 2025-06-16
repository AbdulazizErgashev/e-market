import { Link } from "react-router-dom";
import { productsData } from "../data/db";

export default function TopProducts({ title }) {
  const top = productsData.slice(0, 4);

  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold text-center mb-10 text-teal-500">
        {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {top.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition">
                {p.title}
              </h1>
              <p className="text-gray-600 text-sm line-clamp-2">
                {p.description}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-teal-600 font-bold text-lg">
                  ${p.price}
                </span>
                <Link
                  to="/products"
                  className="text-sm bg-teal-500 text-white px-4 py-1 rounded-full hover:bg-teal-600 transition"
                >
                  see details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
