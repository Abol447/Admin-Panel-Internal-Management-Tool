import React from "react";
import Sidebar from "./Sidebar";
import Index from "../routes/Index";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="bg-gray-200" >
      <Navbar />
      <div >
        <div className="p-5" >
          <Sidebar />
        </div>

        <Index />

      </div>
    </div>
  );
}
