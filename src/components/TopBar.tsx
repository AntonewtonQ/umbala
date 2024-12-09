"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const TopBar = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<{
    fullName: string;
    initials: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const docRef = doc(db, "users", user.uid); // Caminho no Firestore
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fullName = data.fullName || "Usuário";
          const initials = fullName
            .split(" ")
            .map((name: string) => name[0])
            .join("")
            .toUpperCase();

          setUserData({ fullName, initials });
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Termina a sessão do usuário
      router.push("/"); // Redireciona para a PublicHome
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 w-full">
      {/* Campo de Pesquisa */}
      <div className="flex items-center w-1/3">
        <div className="relative flex items-center w-full">
          <Search className="absolute left-3 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notificação e Perfil */}
      <div className="flex items-center space-x-4">
        {/* Ícone de Notificação */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dropdown do Perfil */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center cursor-pointer space-x-2">
              <div className="w-8 h-8">
                {userData ? userData.initials : "U"}
              </div>
              <span className="text-gray-700 font-medium">
                {userData ? userData.fullName : "Carregando..."}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Perfil</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Meu Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings">Configurações</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-600"
              >
                Sair
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
