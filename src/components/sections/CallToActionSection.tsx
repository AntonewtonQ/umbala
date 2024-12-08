"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-12 px-10 bg-white flex justify-center mt-10">
      <div className="border-4 border-dashed border-[#305350] p-3 rounded-lg ">
        <div className="relative h-[600px] p-8 bg-[#359D9E] rounded-lg shadow-lg  lg:flex lg:items-center">
          {/* Texto e Chamada para Ação */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Vamos começar?
            </h2>
            <p className="my-10 text-teal-100">
              Transforme o futuro da sua carreira ou empresa. Junte-se à Ombila
              e dê o próximo passo para o sucesso!
            </p>
            <Link
              className="w-60 p-4 text-center rounded-full text-white bg-[#215273] hover:bg-[#193649]"
              href={"/register"}
            >
              Candidata-te já!
            </Link>
          </div>

          {/* Imagem */}
          <div className="relative lg:w-1/2 mt-6 lg:mt-0 lg:ml-6">
            <img
              src="/images/smile.png"
              alt="Pessoa sorrindo"
              className="object-cover w-[430px] rounded-lg"
            />
          </div>

          {/* Elementos decorativos */}
          <div className="absolute top-4 left-4 text-white text-5xl">+</div>
          <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-2 text-white opacity-50">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
