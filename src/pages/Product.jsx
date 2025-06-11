import { productsData } from "../data/db";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Product() {
  return (
    <div className="container mx-auto my-28 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-10">
      {productsData.map((mahsulot, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-5 shadow-xl transition-all duration-200 hover:shadow-2xl p-10 h-[500px] rounded-2xl"
        >
          <img
            src={mahsulot.img}
            className="transition-all duration-500 hover:scale-90"
          />
          <h1 className="text-center font-bold text-2xl text-[#819A91]">
            {mahsulot.title}
          </h1>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-widest text-gray-500">
                {mahsulot.category}
              </span>
              <div className="space-x-3">
                <span className="line-through text-lg font-semibold tracking-widest text-gray-400">
                  ${(mahsulot.price * 1).toFixed(2)}
                </span>
                <span className=" text-lg font-semibold tracking-widest text-gray-900">
                  ${(mahsulot.price - mahsulot.price * 0.1).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="text-[#819A91]">
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
