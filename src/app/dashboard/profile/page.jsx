"use client";
import UpdateProfileModal from "@/components/DashboardPage/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Card, Spinner } from "@heroui/react";
import Image from "next/image";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="min-h-[50vh] w-full py-10 flex justify-center">
      {isPending ? (
        <div className="flex justify-center items-center min-h-[90vh]">
          <Spinner color="success" />
        </div>
      ) : (
        <Card className="w-100 py-10 shadow shadow-[#5ddda9] flex flex-col justify-center items-center ">
          <h2 className="text-3xl text-center font-bold mb-7">User Profile</h2>
          <div>
            <Image
              alt={user?.name}
              src={user?.image || userImg}
              height={400}
              width={400}
              className="rounded w-30 h-30 object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mt-7 ">{user?.name}</h2>
          <p className="text-md font-semibold text-gray-500">{user?.email}</p>
          <UpdateProfileModal user={user}></UpdateProfileModal>
        </Card>
      )}
    </div>
  );
};

export default MyProfilePage;
