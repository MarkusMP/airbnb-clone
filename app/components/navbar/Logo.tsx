"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer mr-2"
      height="100"
      width="100"
      src="/images/logo.png"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
