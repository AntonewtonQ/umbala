"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      console.log(user);
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
        <p>Carregando informações do usuário...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Resumo do Perfil</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card com informações do usuário */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <img
              src={userData.photoURL || "/default-avatar.png"}
              alt="Perfil"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">{userData.fullName}</h2>
              <p>Data de nascimento: {userData.birthDate || "Não informado"}</p>
              <p>Morada: {userData.neighborhood || "Não informado"}</p>
              <p>
                Nível acadêmico: {userData.educationLevel || "Não informado"}
              </p>
              <p>
                Área de interesse: {userData.interestArea || "Não informado"}
              </p>
              <p>Telefone: {userData.phone || "Não informado"}</p>
            </div>
          </div>
          <Button variant="outline" className="mt-4 flex items-center">
            <Edit className="mr-2" /> Editar Perfil
          </Button>
        </div>

        {/* Créditos Disponíveis */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center">
            Créditos Disponíveis
          </h2>
          <p className="text-6xl font-bold text-blue-500 mt-4">
            {userData.credits || 0}
          </p>
          <Button variant="default" className="mt-4">
            Obter créditos
          </Button>
        </div>

        {/* Antes de Começarmos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Antes de começarmos:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Os testes têm tempo limite.</li>
            <li>Atividades suspeitas anulam o teste.</li>
            <li>O portfólio só é gerado se aderir a um pacote.</li>
          </ul>
          <Button variant="default" className="mt-6 w-full">
            Começar teste!
          </Button>
        </div>
      </div>

      {/* Próximos Passos */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Próximos passos</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Teste de avaliação inicial -{" "}
                {userData.interestArea || "Área de Interesse"}
              </h3>
              <p className="text-gray-700">
                Uma avaliação inicial destinada a identificar o nível de
                conhecimento ou habilidades do participante.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Resultado do Teste de Avaliação
              </h3>
              <p className="text-gray-700">
                O resultado irá definir se o nível de conhecimento é suficiente
                para avançar para os desafios ou será redirecionado para
                capacitações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
