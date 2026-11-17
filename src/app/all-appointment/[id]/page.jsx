import { BookModal } from "@/components/AppointmentDetailsPage/BookModal";
import { getSingleAppointmentData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaRegClock,
  FaStar,
  FaHospital,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const AppointmentDetailPage = async ({ params }) => {
  const { id } = await params;

  const doctor = await getSingleAppointmentData(id);

  if (!doctor) {
    return <div className="text-center py-20">Doctor not found!</div>;
  }

  const {
    _id,
    name,
    image,
    rating,
    specialty,
    location,
    experience,
    fee,
    description,
    hospital,
    availability,
  } = doctor;

  const details = [
    {
      title: "Experience",
      value: experience,
      icon: <FaRegClock />,
    },
    {
      title: "Hospital",
      value: hospital,
      icon: <FaHospital />,
    },
    {
      title: "Location",
      value: location,
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Consultation Fee",
      value: `৳${fee}`,
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-0 py-10 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Doctor Image */}
        <div className="w-full">
          <div className="relative h-87.5 sm:h-112.5 md:h-125 w-full">
            <Image
              src={image}
              alt={name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Doctor Information */}
        <div className="md:col-span-2">
          {/* Specialty */}
          <span className="inline-block px-3 py-1 bg-[#eefaf8] dark:bg-[#01251b] text-[#069c6e] rounded-full text-sm font-medium">
            {specialty}
          </span>

          {/* Name */}
          <h1 className="text-2xl sm:text-3xl font-bold mt-3">{name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-gray-500">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold text-black dark:text-white">
              {rating}
            </span>
            <span>/ 5.0</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mt-4 leading-relaxed">{description}</p>

          {/* Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-xl"
              >
                <div className="shrink-0 p-3 rounded-lg bg-[#eefaf8] dark:bg-[#01251b] text-[#069c6e] text-lg">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.title}
                  </p>

                  <h2 className="font-semibold text-sm sm:text-base break-words">
                    {item.value}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Availability</h3>

            <div className="flex flex-wrap gap-2">
              {availability?.map((time, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#eefaf8] dark:bg-[#01251b] text-[#069c6e] border border-[#c5e9df] text-xs font-medium"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Appointment Button */}
          <div className="mt-7">
            <BookModal doctor={doctor}></BookModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailPage;
