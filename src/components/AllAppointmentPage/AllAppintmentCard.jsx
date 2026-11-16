import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const AllAppintmentCard = ({ doctor }) => {
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
  } = doctor;
  return (
    <div>
      <Card className="p-0 rounded-lg pb-4">
        <div className="min-w-full relative">
          <Image
            src={image}
            alt={name}
            height={800}
            width={800}
            className="w-full max-h-65 rounded-t-lg object-cover "
          ></Image>
          <span className="flex items-center justify-center gap-1 px-1 py-0.2 bg-white dark:bg-[#01251b]  border w-13 rounded-full absolute top-2 right-2 z-10 text-sm">
            <FaStar className="text-yellow-500 " /> {rating}
          </span>
        </div>
        <div className="px-3">
          <h2 className="text-gray-900 text-xl font-semibold ">{name}</h2>
          <h2 className="text-[#069c6e] font-semibold ">{specialty}</h2>
          <p className="text-gray-500 line-clamp-1 text-sm mt-1">
            {description}
          </p>
          <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
            <MdOutlineLocationOn className="text-lg" /> {location}
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-1 ">
            <FaRegClock className="ml-0.5" /> {experience}
          </div>
        </div>
        <div className="px-3 border-t border-gray-300 pt-2 flex justify-between items-end">
          <div className="text-gray-500 text-sm">
            <p>Consultation</p>
            <p className="text-xl text-[#069c6e] font-bold">
              <span className="text-gray-500 text-sm mr-1">ট</span>
              {fee}
            </p>
          </div>
          <Link href={`/all-appointment/${_id}`}>
            <Button size="sm" className="bg-[#069c6e]">
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AllAppintmentCard;
