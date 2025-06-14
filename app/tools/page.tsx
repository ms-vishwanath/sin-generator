"use client";
import clsx from "clsx";
import Link from "next/link";

import React from "react";

export default function Page() {
  const tools = [
    { name: "SIN Generator", url: "/tools/sin-generator", disabled: false },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4">
        {tools?.map((item: any, index: number) => (
          <Link key={index} href={item?.url}>
            <div
              className={clsx(
                item.disabled ? "opacity-80" : "",
                "bg-primary p-4 rounded-md flex justify-center items-center h-40"
              )}
            >
              <h1 className="text-secondary">{item?.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
