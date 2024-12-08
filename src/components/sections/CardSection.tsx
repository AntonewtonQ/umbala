import React from "react";
import {
  Presentation,
  Waypoints,
  DollarSign,
  Bell,
  Shapes,
  BriefcaseBusiness,
  Zap,
} from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start border border-gray-200">
      <div className="w-12 h-12 flex items-center justify-center bg-[#215273] rounded-full mb-4 text-white">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const ImpactCards: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#359D9E] font-bold text-4xl text-center py-10">
          Como a OMBILA transforma talentos em impacto?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-8">
          <Card
            title="Capacitação Direcionada"
            description="Desafios reais e formações práticas para o preparar para o mercado de trabalho com competências valiosas e aplicáveis."
            icon={<Presentation />}
          />
          <Card
            title="Conexão com Empresas"
            description="Acesso a oportunidades de emprego em empresas que procuram talentos qualificados, acelerando a sua entrada no mercado."
            icon={<Waypoints />}
          />
          <Card
            title="Desenvolvimento Contínuo"
            description="Um ciclo de aprendizagem contínua, onde formadores e formados evoluem, garantindo uma qualificação adaptada às necessidades do mercado."
            icon={<DollarSign />}
          />
          <Card
            title="Portfólio Personalizado"
            description="Criação de um portfólio dinâmico e atualizado com base nos desafios e competências adquiridas, destacando o seu potencial para os empregadores."
            icon={<BriefcaseBusiness />}
          />
          <Card
            title="Rede de Oportunidades"
            description="Faça parte de uma comunidade que valoriza o crescimento profissional e as conexões, aumentando as suas chances de sucesso."
            icon={<Bell />}
          />
          <Card
            title="Aprendizado Flexível"
            description="Acesso a conteúdos de formação que se adaptam ao seu ritmo e nível de experiência, permitindo que aprenda de forma personalizada e eficaz."
            icon={<Zap />}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactCards;
