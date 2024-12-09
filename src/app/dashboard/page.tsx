"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/utils/firebase";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { Menu, History, ChartLine, Box, Calendar } from "lucide-react"; // Ícones para os cards
import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import ProgressChart from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrainingSummary from "@/components/cards/TrainingSummary";
import NextClasses from "@/components/cards/NextClasses";

const Dashboard = () => {
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controle da sidebar

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Carregando dados do usuário...</p>
      </div>
    );
  }

  const chartData = userData?.progressData || [
    { month: "January", completed: 50, incomplete: 30 },
    { month: "February", completed: 70, incomplete: 40 },
    { month: "March", completed: 60, incomplete: 50 },
    { month: "April", completed: 40, incomplete: 30 },
    { month: "May", completed: 50, incomplete: 20 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`transition-transform ${
          isSidebarOpen ? "block" : "hidden"
        } sm:block`}
      >
        <Sidebar />
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 ml-64">
        {/* Header */}
        {/* Header Fixo */}
        <div className="top-0 left-64 right-0 z-10">
          <TopBar />
        </div>
        <div className="p-6">
          <header className="flex justify-between items-center mb-6">
            {/* Botão para alternar a Sidebar */}
            <button
              className="sm:hidden text-gray-700"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div>
              <h1 className="text-5xl font-bold">
                Olá, {userData.fullName} 👋
              </h1>
              <p className="text-gray-600">Que bom que estás de volta!</p>
            </div>
          </header>

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">
                  Total de Capacitações
                </CardTitle>
                <History className="text-[#FF9066] bg-red-100 p-2 rounded-full w-20 h-20" />
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold">
                  {userData.totalCapacitations || 0}
                </p>
                <p className="text-lg text-green-500 mt-1">
                  +1.8% no último mês
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Total de Desafios</CardTitle>
                <ChartLine className="text-[#4AD991] bg-green-100 p-2 rounded-full w-20 h-20" />
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold">
                  {userData.totalChallenges || 0}
                </p>
                <p className="text-lg text-red-500 mt-1">-4.3% no último mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Horas Gastas</CardTitle>
                <Box className="text-[#FEC53D] bg-yellow-100 p-2 rounded-full w-20 h-20" />
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold">{userData.totalHours || 0}</p>
                <p className="text-lg text-green-500 mt-1">
                  +1.3% no último mês
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Calendar className="bg-slate-400 text-white p-2 rounded-full w-10 h-10" />
                <CardTitle className="text-2xl">Evento Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Workshop sobre IA</p>
                <p className="text-md text-gray-500">
                  Avanços da tecnologia com IA nos próximos anos
                </p>
                <p className="text-md text-[#215273] mt-1">Com: Júlio César</p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos e Progresso */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Progresso dos Desafios */}
            <Card>
              <CardHeader>
                <CardTitle>Progresso dos Desafios</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressChart data={chartData} />
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center">
                  <p className="text-3xl font-bold text-blue-500">
                    Eficiência: 88%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Resumo do Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {userData.roadmap?.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-800"
                    >
                      <input type="checkbox" checked readOnly /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Resumo de Capacitações e Próximas Aulas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <TrainingSummary />
            <NextClasses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
