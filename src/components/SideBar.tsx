"use client";

import {
  Home,
  ClipboardList,
  Calendar,
  Users,
  GraduationCap,
  Briefcase,
  Settings,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 bg-[#215273] text-white flex flex-col p-6 space-y-6">
      {/* Logo */}
      <div className="text-2xl font-bold">Umbala</div>

      {/* Menu */}
      <nav className="flex flex-col space-y-4">
        <Link
          href="/"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/challenges"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <ClipboardList className="w-5 h-5" />
          <span>Desafios</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <Calendar className="w-5 h-5" />
          <span>Roadmap</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <Users className="w-5 h-5" />
          <span>Comunidade</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <Briefcase className="w-5 h-5" />
          <span>Portfólio</span>
        </Link>
        <Link
          href="/courses"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <GraduationCap className="w-5 h-5" />
          <span>Aulas</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 hover:bg-[#23445a] p-2 rounded-md transition"
        >
          <Settings className="w-5 h-5" />
          <span>Definições</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
