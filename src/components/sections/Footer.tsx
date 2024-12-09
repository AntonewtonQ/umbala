"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#215273] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-0">
        {/* Texto principal e botão */}
        <div className="text-center ">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            Transforme talentos em sucesso.
          </h3>
          <Link
            href="/register"
            className="inline-block bg-white text-[#215273] font-bold py-3 px-6 rounded-full hover:bg-zinc-200 transition"
          >
            Candidata-te já!
          </Link>
        </div>

        {/* Links e informações de contato */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
          {/* Coluna 1: Logo e descrição */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/images/logo.png"
              alt="Logo Ombila"
              className="h-8 mb-4"
            />
            <p className="text-sm text-center lg:text-left">
              A ponte entre o aprendizado e o mercado.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Links rápidos
            </h4>
            <ul className="space-y-2 flex flex-col justify-center items-center">
              <li>
                <a href="#inicio" className="hover:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:underline">
                  Quem somos?
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:underline">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contactos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Contactos
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <Phone className="mr-2" />
                +222 999 999 999
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Mail className="mr-2" />
                geral@ombila.co.ao
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <MapPin className="mr-2" />
                Luanda, Angola
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 text-center text-sm lg:text-base font-bold">
        <p>Todos os direitos reservados 2024 – Ombila</p>
      </div>
    </footer>
  );
};

export default Footer;
