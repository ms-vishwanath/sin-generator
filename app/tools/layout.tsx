import Header from "@/components/header";
import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="p-4 space-y-4">
      <Header />
      {children}
    </div>
  );
}
