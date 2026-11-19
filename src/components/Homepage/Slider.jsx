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

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-auto">
        <Image
          src={banner1}
          alt="Featured appointment service"
          height={2500}
          width={2500}
          className="w-full h-auto"
        />
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
      <SwiperSlide className="w-screen">
        <Image
          src={banner1}
          alt="banner1"
          height={2500}
          width={2500}
          className="w-full h-auto"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <Image
          src={banner2}
          alt="banner2"
          height={2500}
          width={2500}
          className="w-full h-auto"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <Image
          src={banner3}
          alt="banner3"
          height={2500}
          width={2500}
          className="w-full h-auto"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <Image
          src={banner4}
          alt="banner4"
          height={2500}
          width={2500}
          className="w-full h-auto"
        ></Image>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
