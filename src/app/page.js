import AllAppintmentCard from "@/components/AllAppointmentPage/AllAppintmentCard";
import Slider from "@/components/Homepage/Slider";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import { getTopRatedData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Home() {
  const TopRatedDoctor = await getTopRatedData();
  return (
    <div className="container mx-auto min-h-screen">
      <Slider></Slider>
      {/* top-rated section */}
      <div className="my-5 lg:my-10 px-3 lg:px-0">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Top Rated</h2>
          <Link href={"/all-appointment"}>
            <Button size="sm" className="bg-[#069c6e]">
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 lg:my-10">
          {TopRatedDoctor.map((doctor) => (
            <AllAppintmentCard
              key={doctor._id}
              doctor={doctor}
            ></AllAppintmentCard>
          ))}
        </div>
        <div className="my-10">
          <WhyChooseUs></WhyChooseUs>
        </div>
      </div>
    </div>
  );
}
