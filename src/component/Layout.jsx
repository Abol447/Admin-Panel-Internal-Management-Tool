import React from "react";
import Sidebar from "./Sidebar";
import Index from "../routes/Index";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Index />
      </div>
    </div>
  );
}
