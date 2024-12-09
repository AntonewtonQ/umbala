"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Menu } from "lucide-react";
import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const Challenges = () => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Controle da sidebar

  useEffect(() => {
    const fetchChallenges = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "challenges"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const challengesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChallenges(challengesData);
      }
    };

    fetchChallenges();
  }, []);

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
              <h1 className="text-5xl font-bold">Desafios</h1>
              <p className="text-gray-600">Encontre e faça desafios</p>
            </div>
          </header>

          {/* Tabela de Desafios */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left">Assignment Title</th>
                  <th className="px-6 py-3 text-left">Course/Lessons</th>
                  <th className="px-6 py-3 text-left">Due Date</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Submit</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((challenge) => (
                  <tr key={challenge.id} className="border-b">
                    <td className="px-6 py-4">{challenge.title}</td>
                    <td className="px-6 py-4">{challenge.courseLesson}</td>
                    <td className="px-6 py-4">{challenge.dueDate}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          challenge.status === "Done"
                            ? "bg-green-500"
                            : challenge.status === "Progress"
                            ? "bg-blue-500"
                            : "bg-red-500"
                        }`}
                      >
                        {challenge.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {challenge.submissionStatus === "Submitted" ? (
                        <span className="text-green-500">Submitted</span>
                      ) : (
                        <button className="text-blue-500 underline">
                          Upload
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <label htmlFor="rowsPerPage" className="mr-2 text-gray-600">
                Exibir
              </label>
              <select
                id="rowsPerPage"
                className="border rounded-md px-3 py-1 text-gray-600"
              >
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>{" "}
              Row
            </div>
            <div>
              <button className="mr-2 px-3 py-1 bg-gray-200 text-gray-600 rounded-md">
                {"<"}
              </button>
              <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
