import AllAppintmentCard from "@/components/AllAppointmentPage/AllAppintmentCard";
import SearchBar from "@/components/AllAppointmentPage/SearchBar";
import { getAllAppointmentData } from "@/lib/data";
import { Suspense } from "react";

const AllAppointmentPage = async ({ searchParams }) => {
  const { search } = await searchParams;
  const AllDoctors = await getAllAppointmentData(search);

  return (
    <div className="container mx-auto py-12 px-3 lg:px-0">
      <h2 className=" text-3xl font-bold text-center">All Appointments</h2>
      <p className="text-gray-500 text-center">
        Find the right doctor for you.
      </p>
      <div className="flex justify-center items-center mt-5">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchBar></SearchBar>
        </Suspense>
      </div>
      {AllDoctors.length === 0 ? (
        <div className="w-full flex justify-center items-center mt-10 min-h-[40vh]">
          <p className="mt-6 text-gray-500 text-2xl font-semibold">
            {" "}
            No Doctor found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {AllDoctors.map((doctor) => (
            <AllAppintmentCard
              key={doctor._id}
              doctor={doctor}
            ></AllAppintmentCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppointmentPage;
