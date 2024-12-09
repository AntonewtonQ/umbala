import {
  TrendingUp,
  TrendingDown,
  Box,
  Calendar,
  RotateCw,
} from "lucide-react";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total de capacitações",
      value: 12,
      icon: <RotateCw className="text-orange-500 w-6 h-6" />,
      trend: { value: "+1.8%", type: "up", description: "No último mês" },
    },
    {
      title: "Total de desafios",
      value: 0,
      icon: <TrendingDown className="text-red-500 w-6 h-6" />,
      trend: { value: "-4.3%", type: "down", description: "No último mês" },
    },
    {
      title: "Horas gastas",
      value: 15000,
      icon: <Box className="text-yellow-500 w-6 h-6" />,
      trend: { value: "+1.3%", type: "up", description: "No último mês" },
    },
    {
      title: "Evento Comunidade",
      icon: <Calendar className="text-blue-500 w-6 h-6" />,
      meta: {
        title: "Workshop sobre IA",
        description: "Avanços da tecnologia com o uso da IA nos próximos anos",
        speaker: "Com: Júlio César",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow flex items-start space-x-4"
        >
          <div>{card.icon}</div>
          <div>
            <h3 className="text-sm text-gray-600 font-medium">{card.title}</h3>
            {card.value !== undefined && (
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            )}
            {card.trend && (
              <p
                className={`flex items-center text-sm ${
                  card.trend.type === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {card.trend.value}{" "}
                <span className="ml-1 text-gray-600">
                  {card.trend.description}
                </span>
              </p>
            )}
            {card.meta && (
              <div>
                <p className="text-sm text-gray-700 font-semibold">
                  {card.meta.title}
                </p>
                <p className="text-xs text-gray-600">{card.meta.description}</p>
                <p className="text-xs text-blue-500 font-medium">
                  {card.meta.speaker}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
