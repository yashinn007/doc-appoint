import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  useOverlayState,
} from "@heroui/react";
import toast from "react-hot-toast";

const UpdateProfileModal = ({ user }) => {
  const modalState = useOverlayState();

  const handelModalSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    //update user from better-auth docs
    const { data, error } = await authClient.updateUser({
      image: image,
      name: name,
    });

    if (error) {
      toast.error(error.message || "Profile update failed");
      return;
    }

    if (data?.status) {
      toast.success("Profile updated successfully");
      e.target.reset();
      modalState.setOpen(false);
    }
  };

  return (
    <Modal state={modalState}>
      <Button className="px-7 py-3 rounded-full bg-[#069c6e]  ">Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-1 md:p-3 lg:p-6">
              <Surface variant="default">
                <Form
                  onSubmit={handelModalSubmit}
                  className="flex flex-col gap-4"
                  render={(props) => <form {...props} />}
                >
                  {/* enter patiant name */}
                  <TextField
                    defaultValue={user?.name ?? ""}
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                    validate={(value) =>
                      value.trim() ? null : "Name is required."
                    }
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter here name" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={user?.image ?? ""}
                    isRequired
                    className="w-full"
                    name="image"
                    type="url"
                    variant="secondary"
                    validate={(value) =>
                      value.trim() ? null : "URL is required."
                    }
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="https://..." />
                    <FieldError />
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
};

export default UpdateProfileModal;
