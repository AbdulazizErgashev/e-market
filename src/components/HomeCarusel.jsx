import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { saleData } from "../data/db";
import { useState, useEffect } from "react";

export default function HomeCarusel() {
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={showNavigation}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {saleData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="w-full h-auto flex flex-col md:flex-row items-center bg-[#1f2937] text-white">
              <div className="w-full md:w-1/2 p-10 flex flex-col items-start justify-center text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {data.title}
                </h1>
                <p className="text-md md:text-xl mb-6">{data.description}</p>
                <a
                  href="#"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition"
                >
                  see more
                </a>
              </div>

              <div className="w-full md:w-1/2 h-64 md:h-[400px]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
