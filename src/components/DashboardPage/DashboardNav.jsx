"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "My Bookings",
      href: "/dashboard/bookings",
    },
    {
      name: "My Profile",
      href: "/dashboard/profile",
    },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-5 py-2 rounded-full transition ${
            pathname === link.href
              ? "bg-[#069c6e] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default DashboardNav;
