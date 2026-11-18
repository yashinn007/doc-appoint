import { BookingDeleteAlert } from "@/components/DashboardPage/BookingDeleteAlert";
import { UpdateModal } from "@/components/DashboardPage/UpdateModal";
import { getBookingData } from "@/lib/data";
import { FaUser, FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";

const MyBookingsPage = async () => {
  const BookingsData = await getBookingData();

  if (BookingsData.length == 0) {
    return (
      <div className="min-h-[50vh] w-full py-10 flex justify-center items-center ">
        <h5 className="text-2xl font-semibold text-gray-500">
          There are no Bookings right now
        </h5>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BookingsData.map((booking) => (
          <div
            key={booking._id}
            className="w-full rounded-2xl border border-gray-200 bg-white dark:bg-black p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Doctor Name */}
            <h3 className="mb-3 text-lg font-bold text-teal-700 dark:text-[#5ddda9]">
              {booking.doctorName}
            </h3>

            {/* Booking Information */}
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FaUser className="text-gray-400" />
                Patient: {booking.patientName}
              </p>

              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                Date: {new Date(booking.date).toLocaleDateString("en-GB")}
              </p>

              <p className="flex items-center gap-2">
                <FaClock className="text-gray-400" />
                Time:{" "}
                {new Date(`1970-01-01T${booking.time}`).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  },
                )}
              </p>

              <p>Reason: {booking.reason}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex items-center gap-2">
              {/* <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <FaPen size={12} />
                Update
              </button> */}
              <UpdateModal booking={booking}></UpdateModal>

              <BookingDeleteAlert bookingId={booking._id}></BookingDeleteAlert>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
