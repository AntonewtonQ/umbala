import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => (
  <header className="flex w-full h-[150px] relative">
    {/* Lado Esquerdo (Azul) */}
    <div className="w-1/2 bg-[#215273] text-white flex items-center px-8">
      <div className="text-2xl font-bold">Ombila</div>
    </div>

    {/* Lado Direito (Branco) */}
    <div className="w-1/2 bg-white flex items-center justify-between px-8">
      <nav className="flex space-x-6 text-[#215273] font-semibold">
        <Link href="/" className="hover:text-[#55C595] transition">
          Início
        </Link>
        <Link href="/about" className="hover:text-[#55C595] transition">
          Quem somos?
        </Link>
        <Link href="/benefits" className="hover:text-[#55C595] transition">
          Benefícios
        </Link>
        <Link href="/programs" className="hover:text-[#55C595] transition">
          Programas
        </Link>
        <Link href="/contacts" className="hover:text-[#55C595] transition">
          Contactos
        </Link>
      </nav>
      <Link href="/login">
        <Button className="bg-[#359D9E] text-white p-6 w-60  rounded-full font-bold transition">
          Fazer login
        </Button>
      </Link>
    </div>
  </header>
);

export default NavBar;
