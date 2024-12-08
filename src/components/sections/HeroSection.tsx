// components/HeroSection.tsx
import Image from "next/image";
import { Button } from "../ui/button";
import NavBar from "../navbar";
import { Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      {/* Navbar */}

      <NavBar />

      {/* Conteúdo Principal */}
      <div className="flex w-full h-full">
        {/* Lado Esquerdo (Texto) */}
        <div className="w-full lg:w-1/2 bg-[#215273] text-white flex items-center px-6 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#359D9E]">Desafios,</span> capacitação{" "}
              <span className="text-[#359D9E]">e oportunidades</span>
            </h1>
            <p className="text-lg mb-8">
              Conecte-se às melhores oportunidades de formação, desenvolva as
              suas habilidades e conquiste o mercado de trabalho. Participe de
              desafios e construa um portfólio que chama a atenção do mercado.
            </p>
            <Button className="bg-[#359D9E] text-white text-xl p-8 w-72 mt-10  rounded-full font-bold transition">
              Bora começar!
            </Button>
          </div>
        </div>
        {/* Lado Direito (Imagem + Card Estatística) */}
        <div className="relative w-full lg:w-1/2 bg-white flex items-center justify-center">
          {/* Imagem */}
          <div className="absolute p-4 border-2 rounded-[30px] border-[#55C595] -left-20 top-10 lg:top-40 lg:-left-28 z-10">
            <Image
              src="/images/learning.jpeg" // Substitua com o caminho correto
              alt="Pessoas colaborando"
              width={585}
              height={708}
              className="rounded-[30px] shadow-xl"
            />
          </div>
          {/* Card Estatística */}
          <div className="absolute bottom-52 left-[-60px] -translate-x-1/2 bg-white p-6 rounded-2xl shadow-lg flex items-center z-20">
            <div className="w-12 h-12 bg-[#359D9E] rounded-full flex items-center justify-center text-white font-bold">
              <Trophy />
            </div>
            <div className="ml-3 text-[#215273] font-semibold">
              <p className="text-2xl">+120</p>
              <p className="text-xl text-gray-600">Pessoas capacitadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
