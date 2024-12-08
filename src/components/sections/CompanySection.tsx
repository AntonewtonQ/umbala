import {
  DollarSign,
  Link,
  Network,
  StepForward,
  TrendingUp,
} from "lucide-react";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="flex items-start gap-4">
    <div className="w-20 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const CompanySection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-[#5B5B5B] font-bold text-lg">É uma empresa?</h2>
          <h3 className="text-[#359D9E] font-extrabold text-3xl leading-snug mt-4">
            Atraia e Forme Talentos Para <br />
            Impulsionar o Crescimento <br />
            da Sua Empresa
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              title="Acesso a talentos"
              description="Conecte-se diretamente com profissionais capacitados e prontos para o mercado."
              icon={<Link />}
            />
            <Feature
              title="Redução de custos"
              description="Identifique e treine candidatos com potencial antes de contratar, diminuindo o risco de má seleção."
              icon={<DollarSign />}
            />
            <Feature
              title="Maior produtividade"
              description="Colaboradores bem treinados e com habilidades atualizadas contribuem para um desempenho mais eficiente."
              icon={<TrendingUp />}
            />
            <Feature
              title="Desenvolvimento contínuo"
              description="Ofereça capacitação direcionada aos seus colaboradores, alinhada às necessidades da empresa."
              icon={<Network />}
            />
          </div>
        </div>

        {/* Image Content */}
        <div className="relative">
          <div className="border-dashed border-2 border-[#369D9E] rounded-[30px] p-4">
            <img
              src="/images/meeting.jpeg"
              alt="Grupo de profissionais"
              className="rounded-[30px] shadow-lg"
            />
          </div>
          <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-10 py-2 border border-gray-200 text-center max-w-2xl">
            <span className="text-gray-800 text-lg">
              De talentos a{" "}
              <span className="text-teal-600 font-bold">protagonistas</span> do
              mercado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
