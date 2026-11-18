"use client";

import { revalidateBooking } from "@/lib/actions";
import { Clock } from "@gravity-ui/icons";
import {
  Button,
  Calendar,
  DateField,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TimeField,
  useOverlayState,
} from "@heroui/react";
import toast from "react-hot-toast";

export function UpdateModal({ booking }) {
  const modalState = useOverlayState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const UpdatedbookingData = Object.fromEntries(formData.entries());

    // Add userId
    UpdatedbookingData.userId = booking.userId;

    // Convert date string to Date Object
    UpdatedbookingData.date = new Date(UpdatedbookingData.date);

    //post data to the server
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedbookingData),
    });
    const result = await res.json();

    await revalidateBooking();

    toast.success("Appoinment Updated successfully");
    modalState.setOpen(false);
  };

  return (
    <Modal state={modalState}>
      <Button className="px-7 py-3 rounded-full bg-slate-200 text-gray-600 ">
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update Appointment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-1 md:p-3 lg:p-6">
              <Surface variant="default">
                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  render={(props) => <form {...props} />}
                >
                  {/* docotor name */}
                  <TextField
                    className="w-full"
                    name="doctorName"
                    type="text"
                    variant="secondary"
                    value={booking.doctorName}
                  >
                    <Label>Doctor</Label>
                    <Input placeholder="Doctor name" readOnly />
                  </TextField>
                  {/* enter patiant name */}
                  <TextField
                    isRequired
                    className="w-full"
                    name="patientName"
                    type="text"
                    variant="secondary"
                    validate={(value) =>
                      value.trim() ? null : "Patient name is required."
                    }
                  >
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter patient name" />
                    <FieldError />
                  </TextField>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                    {/* date */}
                    <DateField
                      isRequired
                      name="date"
                      variant="secondary"
                      validate={(value) =>
                        value ? null : "Please select a date."
                      }
                    >
                      <Label>Date</Label>
                      <DateField.Group>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                        <DateField.Suffix>
                          <Calendar className="size-4 text-muted" />
                        </DateField.Suffix>
                      </DateField.Group>
                      <FieldError />
                    </DateField>
                    {/* time */}
                    <TimeField
                      isRequired
                      name="time"
                      variant="secondary"
                      validate={(value) =>
                        value ? null : "Please select a time."
                      }
                    >
                      <Label>Time</Label>
                      <TimeField.Group>
                        <TimeField.Input>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                        <TimeField.Suffix>
                          <Clock className="size-4 text-muted" />
                        </TimeField.Suffix>
                      </TimeField.Group>
                      <FieldError />
                    </TimeField>
                  </div>
                  {/* descroption */}
                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#069c6e] hover:bg-[#047f5a] text-white"
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
