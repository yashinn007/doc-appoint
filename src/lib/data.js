export const getAllAppointmentData = async () => {
  "use cache";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointment`,
  );
  const data = await res.json();
  return data;
};

export const getSingleAppointmentData = async (id) => {
  "use cache";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointment/${id}`,
  );
  const data = await res.json();
  return data;
};

export const getBookingData = async () => {
  "use cache";
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`);
  const data = await res.json();
  return data;
};
