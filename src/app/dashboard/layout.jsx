import DashboardNav from "@/components/DashboardPage/DashboardNav";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="container mx-auto px-3 lg:px-0 py-10">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>

      {/* Dashboard Navigation */}
      <DashboardNav></DashboardNav>

      {/* Nested Route Content */}
      {children}
    </div>
  );
}
