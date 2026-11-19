import AllAppintmentCard from "@/components/AllAppointmentPage/AllAppintmentCard";
import Slider from "@/components/Homepage/Slider";
import { getTopRatedData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Home() {
  const TopRatedDoctor = await getTopRatedData();
  return (
    <div className="container mx-auto min-h-screen">
      <Slider></Slider>
      <div className="my-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Top rated</h2>
          <Link href={"/all-appointment"}>
            <Button className="bg-[#069c6e]">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {TopRatedDoctor.map((doctor) => (
            <AllAppintmentCard
              key={doctor._id}
              doctor={doctor}
            ></AllAppintmentCard>
          ))}
        </div>
      </div>
    </div>
  );
}
