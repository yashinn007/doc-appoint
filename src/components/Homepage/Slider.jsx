"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import banner4 from "@/assets/banner-4.png";

const banners = [banner1, banner2, banner3, banner4];

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback before mounting
  if (!isMounted) {
    return (
      <div className="w-full overflow-hidden">
        <Image
          src={banner1}
          alt="Featured appointment service"
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "#5ddda9",
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner}
              alt={`DocAppoint banner ${index + 1}`}
              priority={index === 0}
              sizes="100vw"
              className="block h-auto w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
