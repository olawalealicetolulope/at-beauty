"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaUsers, FaChartBar, FaCalendarAlt, FaCogs } from "react-icons/fa";

const AdminSidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    { name: "Dashboard", href: "/admin", icon: <FaChartBar /> },
    { name: "Appointments", href: "/admin/appointments", icon: <FaCalendarAlt /> },
    { name: "Contacts", href: "/admin/contact", icon: <FaEnvelope /> },
    { name: "Users", href: "/admin/users", icon: <FaUsers /> },
    { name: "Settings", href: "/admin/settings", icon: <FaCogs /> },
  ];

  return (
    <aside className="bg-orange-300 h-full w-full p-4 flex flex-col justify-between shadow-md">
      {/* Logo and App Name */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="Admin Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">{session?.user?.name || "Admin"}</h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {links.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 p-2 rounded-md text-gray-800 hover:bg-orange-400 hover:text-white transition ${
                pathname === href ? "bg-orange-400 text-white" : ""
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
    </aside>
  );
};

export default AdminSidebar;
