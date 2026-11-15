"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ThemeToggol } from "./ThemeToggol";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLinks href={"/"}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={"/all-appointment"}>All Appointment</NavLinks>
      </li>
      <li>
        <NavLinks href={"/dashboard"}>Dashboard</NavLinks>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-3 md:px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              height={300}
              width={300}
              loading="eager"
              className="w-36 md:w-48 h-auto"
            ></Image>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="space-x-3 flex justify-center items-center">
          <ThemeToggol></ThemeToggol>
          <div className="space-x-2 ">
            <Link href="#">Login</Link>
            <Button size="sm" className="bg-[#069c6e]">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
}
