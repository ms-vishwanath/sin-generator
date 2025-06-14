"use client";
import { Input } from "@/components/ui/input";
import SINGenerator from "@/forms/SINGenerator";
import React from "react";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-12 gap-4 lg:w-8/12 w-11/12 mx-auto">
      <div className="col-span-12">
        <SINGenerator />
      </div>
    </div>
  );
}
