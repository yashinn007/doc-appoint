import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-[#eefaf8] dark:bg-[#01251b] grid grid-cols-2 md:grid-cols-4 py-12 px-3 md:px-0">
      <div className="col-span-2 mb-5 md:mb-0 md:pl-5 lg:pl-25">
        <Image
          src={logo}
          alt="Logo"
          height={300}
          width={300}
          loading="eager"
          className="w-36 md:w-48 h-auto"
        ></Image>
        <p className="text-gray-500">
          Book trusted doctors near you, manage <br /> appointments, and take
          charge of your health.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-gray-500">
        <h4 className="text-xl text-gray-700 font-medium">Quick Links</h4>
        <Link className="mt-1" href={"/"}>
          Home
        </Link>
        <Link href={"/all-appointment"}>All Appointment</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      <div className="">
        <h4 className="text-xl text-gray-700 font-medium">Follow Us</h4>
        <div className="flex gap-3 mt-3 flex-wrap ">
          <span className="p-4 border border-[#5ddda9] rounded-lg ">
            <LuFacebook className="text-[#5ddda9]" />{" "}
          </span>
          <span className="p-4 border border-[#5ddda9] rounded-lg ">
            <LuInstagram className="text-[#5ddda9]" />
          </span>
          <span className="p-4 border border-[#5ddda9] rounded-lg ">
            <LuTwitter className="text-[#5ddda9]" />
          </span>
          <span className="p-4 border border-[#5ddda9] rounded-lg">
            <LuLinkedin className="text-[#5ddda9]" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
