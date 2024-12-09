// components/HeroSection.tsx
import Image from "next/image";
import { Button } from "../ui/button";
import NavBar from "../navbar";
import { Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Conteúdo Principal */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Lado Esquerdo (Texto) */}
        <div className="w-full lg:w-1/2 bg-[#215273] text-white flex items-center px-6 lg:px-16 py-10 lg:py-0">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#359D9E]">Desafios,</span> capacitação{" "}
              <span className="text-[#359D9E]">e oportunidades</span>
            </h1>
            <p className="text-base lg:text-lg mb-20">
              Conecte-se às melhores oportunidades de formação, desenvolva as
              suas habilidades e conquiste o mercado de trabalho. Participe de
              desafios e construa um portfólio que chama a atenção do mercado.
            </p>
            <Button className="bg-[#359D9E] mb-64 text-white text-lg px-8 py-3 rounded-full font-bold transition hover:bg-[#2e8283]">
              Bora começar!
            </Button>
          </div>
        </div>
        {/* Lado Direito (Imagem + Card Estatística) */}
        <div className="relative w-full lg:w-1/2 bg-white flex items-center justify-center">
          {/* Imagem */}
          <div className="absolute p-4 border-2 rounded-[30px] border-[#55C595] -left-10 sm:left-0 lg:-left-28 z-10">
            <Image
              src="/images/learning.jpeg"
              alt="Pessoas colaborando"
              width={585}
              height={708}
              className="rounded-[30px] shadow-xl"
            />
          </div>
          {/* Card Estatística */}
          <div className="absolute bottom-10 sm:bottom-20 lg:bottom-52 left-1/2 lg:left-auto lg:-translate-x-0 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg flex items-center z-20">
            <div className="w-12 h-12 bg-[#359D9E] rounded-full flex items-center justify-center text-white font-bold">
              <Trophy />
            </div>
            <div className="ml-3 text-[#215273] font-semibold">
              <p className="text-xl lg:text-2xl">+120</p>
              <p className="text-sm lg:text-base text-gray-600">
                Pessoas capacitadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
