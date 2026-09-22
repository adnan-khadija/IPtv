"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Redirect page: /fr → /
 * Handles browsers that cached the old /fr route.
 */
export default function FrRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
