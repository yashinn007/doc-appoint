export const getTopRatedData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-rated`, {
    next: {
      revalidate: 120,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch appointments: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export const getAllAppointmentData = async (search = "") => {
  const url = new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-appointment`);

  if (search) {
    url.searchParams.set("search", search);
  }

  const res = await fetch(url.toString(), {
    next: {
      revalidate: 120,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch appointments: ${res.status}`);
  }

  return res.json();
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
