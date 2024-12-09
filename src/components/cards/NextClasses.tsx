"use client";

import React from "react";
import { Calendar, ChartLine } from "lucide-react"; // Ícones
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const nextClasses = [
  {
    id: 1,
    title: "Técnicas de Comunicação",
    time: "15:30",
    location: "Projecto Nova Vida",
    icon: (
      <Calendar className="text-[#FEC53D] bg-yellow-100 p-2 rounded-full w-10 h-10" />
    ),
  },
  {
    id: 2,
    title: "Gestão de Equipas",
    time: "12:10",
    location: "Camama, V...",
    icon: (
      <ChartLine className="text-[#4AD991] bg-green-100 p-2 rounded-full w-10 h-10" />
    ),
  },
];

const NextClasses = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Aulas</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {nextClasses.map((nextClass) => (
            <li
              key={nextClass.id}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded-md"
            >
              {nextClass.icon}
              <div>
                <p className="font-bold text-gray-800">{nextClass.title}</p>
                <div className="text-sm text-gray-500">
                  <p>🕒 {nextClass.time}</p>
                  <p>📍 {nextClass.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NextClasses;
