export const getAllAppointmentData = async () => {
  "use cache";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointment`,
  );
  const data = await res.json();
  return data;
};

export const getSingleAppointmentData = async (id, token) => {
  "use cache";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointment/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getBookingData = async (userId, token) => {
  "use cache";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking?userId=${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();

  return data;
};
