"use client";

import React from "react";
import { History, Box } from "lucide-react"; // Ícones
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trainings = [
  {
    id: 1,
    title: "Gestão de Equipas",
    duration: "5h:30",
    lessons: "05 Aulas",
    instructor: "Adilson Camacho",
    icon: (
      <History className="text-[#6C63FF] bg-indigo-100 p-2 rounded-full w-10 h-10" />
    ),
  },
  {
    id: 2,
    title: "Técnicas de Persuasão",
    duration: "4h",
    lessons: "03 Aulas",
    instructor: "Sandra Mateus",
    icon: (
      <Box className="text-[#FF9066] bg-orange-100 p-2 rounded-full w-10 h-10" />
    ),
  },
];

const TrainingSummary = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Resumo de Capacitações</CardTitle>
        <input
          type="text"
          placeholder="Pesquisar"
          className="text-sm border-gray-300 rounded-md p-2"
        />
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {trainings.map((training) => (
            <li
              key={training.id}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded-md"
            >
              {training.icon}
              <div>
                <p className="font-bold text-gray-800">{training.title}</p>
                <div className="text-sm text-gray-500 flex gap-2">
                  <span>⏱️ {training.duration}</span>
                  <span>📚 {training.lessons}</span>
                  <span>👨‍🏫 {training.instructor}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrainingSummary;
