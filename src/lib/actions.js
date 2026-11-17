"use server";
import { revalidatePath } from "next/cache";

export const revalidateBooking = async () => {
  revalidatePath("/dashboard/bookings");
};
