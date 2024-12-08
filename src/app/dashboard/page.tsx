"use client";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/utils/firebase";
import { doc, DocumentData, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState<DocumentData | null>(null);

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
        <p>Carregando dados do usuário...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1>Olá, {userData.fullName}!</h1>
      <p>Seja bem-vindo ao seu dashboard.</p>
      {/* Renderize mais informações do usuário aqui */}
    </div>
  );
};

export default Dashboard;
