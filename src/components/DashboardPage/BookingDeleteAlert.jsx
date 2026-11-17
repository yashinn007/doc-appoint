"use client";

import { revalidateBooking } from "@/lib/actions";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";

export function BookingDeleteAlert({ bookingId }) {
  const handleCancelBooking = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const data = await res.json();

    await revalidateBooking();
    toast.error("Appointment deleted!");
  };

  return (
    <AlertDialog>
      <Button className="rounded-full bg-red-500">
        <FaDeleteLeft></FaDeleteLeft> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
