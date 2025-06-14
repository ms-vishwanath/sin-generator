import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1></h1>
        <Image src={"/logo.svg"} width={100} height={60} alt="logo" />
      </div>
    </div>
  );
}
