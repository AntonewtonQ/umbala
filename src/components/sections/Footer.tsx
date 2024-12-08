"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#215273] text-white py-10 px-6 mt-9">
      <div className="container mx-auto flex justify-between my-10">
        <h3 className="text-3xl font-semibold">
          Transforme talentos em {"\n"} sucesso.
        </h3>
        <Link
          className="w-60 p-4  text-center rounded-full text-[#215273] bg-white hover:bg-zinc-200"
          href={"/register"}
        >
          Candidata-te já!
        </Link>
      </div>
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coluna 1: Logo e descrição */}
          <div>
            <div className="mt-4">
              <img src="/images/logo.png" alt="Logo Ombila" className="h-8" />
              <p className="mt-2 text-sm">
                A ponte entre o aprendizado e o mercado.
              </p>
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h4 className="text-xl font-semibold">Links rápidos</h4>
            <ul className="mt-4 space-y-2">
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
            <h4 className="text-xl font-semibold">Contactos</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">
                  <Phone />
                </span>{" "}
                +222 999 999 999
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <Mail />
                </span>{" "}
                geral@ombila.co.ao
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <MapPin />
                </span>{" "}
                Luanda, Angola
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 pt-4 text-center text-xl font-bold">
        <p>Todos os direitos reservados 2024 – Ombila</p>
      </div>
    </footer>
  );
};

export default Footer;
