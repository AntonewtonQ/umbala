"use client";

import React from "react";
import { History, Box, Clock, Book, GraduationCap } from "lucide-react"; // Ícones
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
      <CardHeader className="flex justify-between">
        <CardTitle>Resumo de Capacitações</CardTitle>
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
                  <span className="flex gap-2">
                    <Clock /> {training.duration}
                  </span>
                  <span className="flex gap-2">
                    <Book /> {training.lessons}
                  </span>
                  <span className="flex gap-2">
                    <GraduationCap /> {training.instructor}
                  </span>
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
