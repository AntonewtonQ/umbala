"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase"; // Configure o Firebase no projeto
import PublicHome from "./publichome/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está logado
        setIsAuthenticated(true);
      } else {
        // Usuário não está logado
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Limpa o listener
  }, []);

  if (loading) {
    // Carregando o estado da autenticação
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  if (isAuthenticated) {
    // Usuário está logado
    return <Dashboard />;
  }

  // Usuário não está logado
  return <PublicHome />;
}
