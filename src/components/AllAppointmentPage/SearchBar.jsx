"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmed = value.trim();
      const current = searchParams.get("search") ?? "";

      if (trimmed === current) return;

      const params = new URLSearchParams(searchParams.toString());
      if (trimmed) {
        params.set("search", trimmed);
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500);

    // if user type again then previous time will de canceled
    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search here..."
      className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-[#069c6e]"
    />
  );
}
