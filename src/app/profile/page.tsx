"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [userData, setUserData] = useState<any | null>(null);
  const router = useRouter();

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

  const startTest = async (interestArea: string) => {
    const user = auth.currentUser;

    if (user) {
      const testDocRef = doc(db, "tests", `${user.uid}-${Date.now()}`);
      const testData = {
        userId: user.uid,
        interestArea,
        questions: [], // Perguntas serão preenchidas pelo backend Flask
        startTime: serverTimestamp(),
        endTime: null,
        status: "in-progress",
      };

      await setDoc(testDocRef, testData);

      router.push(`/test/${testDocRef.id}`); // Redirecionar para a página do teste
    }
  };

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Carregando informações do usuário...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#B9E3FF69] min-h-screen px-10 flex flex-col gap-10">
      <div className="bg-[#215273] p-10 rounded-b-3xl flex justify-between mb-8">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="meu perfil"
            width={200}
            height={200}
          />
        </Link>
        <p className="text-white text-2xl font-bold">Resumo do perfil</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Card com informações do usuário */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <div className="flex items-center">
            <div className="flex p-1 border-4 rounded-full border-[#215273] border-dotted">
              <img
                src={userData.photoURL || "/images/default.webp"}
                alt="Perfil"
                className="w-32 h-32 rounded-full"
              />
            </div>
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
          <h2 className="text-2xl font-bold text-center text-[#359D9E]">
            Créditos Disponíveis
          </h2>
          <p className="text-6xl font-bold text-[#359D9E] mt-4">
            {userData.credits || 0}
          </p>
          <Button
            variant="default"
            className="mt-4 bg-[#359D9E] w-64 rounded-full"
          >
            Obter créditos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {/* Próximos Passos */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <h2 className="text-2xl font-bold mb-4">Próximos passos</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#359D9E] rounded-full flex items-center justify-center text-white font-bold">
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
                  O resultado irá definir se o nível de conhecimento é
                  suficiente para avançar para os desafios ou será redirecionado
                  para capacitações.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Antes de Começarmos */}
        <div className="bg-[#215273] shadow-lg rounded-lg p-6 text-white ">
          <h2 className="text-2xl font-bold mb-4">Antes de começarmos:</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Os testes têm tempo limite.</li>
            <li>Atividades suspeitas anulam o teste.</li>
            <li>O portfólio só é gerado se aderir a um pacote.</li>
          </ul>
          <Button
            onClick={() => startTest(userData.interestArea)}
            variant="default"
            className="mt-6 w-54 text-white bg-[#359D9E] rounded-full "
          >
            Começar teste!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
