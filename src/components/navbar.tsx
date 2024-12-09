import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#215273]">Umbala</div>

        {/* Menu de Navegação */}
        <nav className="hidden lg:flex space-x-6 text-[#215273] font-semibold">
          <Link href="/" className="hover:text-[#55C595] transition">
            Início
          </Link>
          <Link href="#about" className="hover:text-[#55C595] transition">
            Quem somos?
          </Link>
          <Link href="#benefits" className="hover:text-[#55C595] transition">
            Benefícios
          </Link>
          <Link href="#programs" className="hover:text-[#55C595] transition">
            Programas
          </Link>
          <Link href="#contacts" className="hover:text-[#55C595] transition">
            Contactos
          </Link>
        </nav>

        {/* Botão Login */}
        <div className="hidden lg:block">
          <Link href="/login">
            <Button className="bg-[#359D9E] text-white px-6 py-3 rounded-full font-bold transition">
              Fazer login
            </Button>
          </Link>
        </div>

        {/* Menu Hamburguer (Mobile) */}
        <button
          className="lg:hidden text-[#215273]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Dropdown (Mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#215273] text-white flex flex-col space-y-4 px-6 py-4">
          <Link href="/" className="hover:text-[#55C595] transition">
            Início
          </Link>
          <Link href="#about" className="hover:text-[#55C595] transition">
            Quem somos?
          </Link>
          <Link href="#benefits" className="hover:text-[#55C595] transition">
            Benefícios
          </Link>
          <Link href="#programs" className="hover:text-[#55C595] transition">
            Programas
          </Link>
          <Link href="#contacts" className="hover:text-[#55C595] transition">
            Contactos
          </Link>
          <Link href="/login">
            <Button className="bg-[#359D9E] text-white w-full py-3 rounded-full font-bold transition">
              Fazer login
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
