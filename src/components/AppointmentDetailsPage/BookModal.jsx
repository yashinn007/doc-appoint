"use client";

import { revalidateBooking } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { Clock } from "@gravity-ui/icons";
import {
  Button,
  Calendar,
  DateField,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Spinner,
  Surface,
  TextField,
  TimeField,
  Select,
  useOverlayState,
} from "@heroui/react";
import toast from "react-hot-toast";

export function BookModal({ doctor }) {
  const modalState = useOverlayState();

  // User Data
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // doctor information
  const { name } = doctor;

  // date
  // const [BookingDate, setBookingDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isPending) return;

    if (!user?.id) {
      toast.error("Login first.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const bookingData = Object.fromEntries(formData.entries());

    // Convert date string to Date Object
    bookingData.date = new Date(bookingData.date);

    // Add userId
    bookingData.userId = user?.id;

    //post data to the server
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    await revalidateBooking();

    toast.success("You booked successfully");
    modalState.setOpen(false);
  };

  return (
    <Modal state={modalState}>
      <Button
        disabled={isPending}
        className="px-7 py-3 rounded-lg bg-[#069c6e] hover:bg-[#047f5a] text-white font-semibold transition duration-300"
      >
        {isPending ? (
          <>
            <Spinner size="sm" className="text-white" />
            <span>Loading...</span>
          </>
        ) : (
          "Book Appointment"
        )}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Book Appointment</Modal.Heading>
              <p className="text-sm leading-5 text-muted">With {name}</p>
            </Modal.Header>
            <Modal.Body className="p-1 md:p-3 lg:p-6">
              <Surface variant="default">
                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  render={(props) => <form {...props} />}
                >
                  {/* user email */}
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                    value={user?.email}
                  >
                    <Label>User Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  {/* docotor name */}
                  <TextField
                    className="w-full"
                    name="doctorName"
                    type="text"
                    variant="secondary"
                    value={name}
                  >
                    <Label>Doctor Name</Label>
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
                    {/* gender */}
                    <Select
                      isRequired
                      name="gender"
                      placeholder="Select one"
                      variant="secondary"
                      validate={(value) => (value ? null : "Select a gender.")}
                    >
                      <Label>Gender</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <FieldError />
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="male" textValue="Male">
                            Male
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="female" textValue="Female">
                            Female
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="custom" textValue="Custom">
                            Custom
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    {/*enter your phone */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                      validate={(value) =>
                        value.trim() ? null : "Phone number is required."
                      }
                    >
                      <Label>Phone</Label>
                      <Input placeholder="01XXXXXXXXX" />
                      <FieldError />
                    </TextField>
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
                      Book
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
