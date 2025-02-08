"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      window.location.replace("/");
    }
  }, [pathname]);

  return null;
}
