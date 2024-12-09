"use client";

import React from "react";
import { COURSES } from "@/constants/constants";
import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const ExploreCourses = () => {
  const renderCourses = (level: string) => {
    return COURSES.filter((course) => course.level === level).map((course) => (
      <div
        key={course.id}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 w-full"
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="flex flex-col mt-2">
          <h3 className="text-lg font-bold">{course.title}</h3>
          <p className="text-sm text-gray-500">{course.category}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">
            Performance:{" "}
            <span className="font-bold text-blue-600">
              {course.performance}%
            </span>
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${course.performance}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            ⏱ {course.duration} {course.duration > 1 ? "Hours" : "Hour"}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="top-0 left-64 right-0 z-10">
          <TopBar />
        </div>
        <div className="p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Explore Cursos</h1>
            <p className="text-gray-500">Encontre e participe de aulas</p>
          </header>

          {/* Cursos por Nível */}
          <div className="flex flex-col justify-between">
            {/* Médio */}
            <section className="mb-8 ">
              <h2 className="text-2xl font-bold mb-4">Médio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {renderCourses("Médio")}
              </div>
            </section>

            {/* Básico */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Básico</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {renderCourses("Básico")}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
