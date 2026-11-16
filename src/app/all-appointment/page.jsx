import AllAppintmentCard from "@/components/AllAppointmentPage/AllAppintmentCard";
import { getAllAppointmentData } from "@/lib/data";

const AllAppointmentPage = async () => {
  const AllDoctors = await getAllAppointmentData();

  return (
    <div className="container mx-auto py-12 px-3 lg:px-0">
      <h2 className=" text-3xl font-bold text-center">All Appointments</h2>
      <p className="text-gray-500 text-center">
        Find the right doctor for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {AllDoctors.map((doctor) => (
          <AllAppintmentCard
            key={doctor._id}
            doctor={doctor}
          ></AllAppintmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllAppointmentPage;
