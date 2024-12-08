import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 mt-20 bg-white">
      <div className="relative w-full lg:w-1/2 max-w-lg">
        <img
          src="/images/video.png"
          alt="Grupo de pessoas trabalhando juntas em dispositivos"
          className="rounded-lg shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 6.75l13.5 5.25-13.5 5.25V6.75z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
        <h2 className="text-teal-600 font-bold text-xl lg:text-2xl">
          Quem Somos?
        </h2>
        <h3 className="text-teal-800 font-extrabold text-2xl lg:text-3xl mt-4 leading-snug">
          O Ponto de Partida <br /> Para Transformar Carreiras
        </h3>
        <p className="text-gray-600 text-base lg:text-lg mt-4">
          A Ombila é uma plataforma que capacita talentos e conecta-os a
          empresas, criando um ciclo contínuo de aprendizado e sucesso no
          mercado de trabalho.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
