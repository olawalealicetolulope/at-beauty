import React from "react";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import "@/app/globals.css";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Fixed Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AdminNavbar />
      </div>

      {/* Sidebar and Content */}
      <div className="flex">
        {/* Sidebar: fixed */}
        <div className="hidden md:block fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] z-40">
          <AdminSidebar />
        </div>

        {/* Main Content: with padding to account for fixed nav and sidebar */}
        <main className="flex-1 pt-20 px-4 ml-0 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}
