"use client";

import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface ProgressChartProps {
  data: {
    month: string;
    completed: number;
    incomplete: number;
  }[];
}

const chartConfig = {
  completed: {
    label: "Concluídos",
    color: "#215273",
  },
  incomplete: {
    label: "Incompletos",
    color: "#21527338",
  },
} satisfies ChartConfig;

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="completed"
          stackId="a"
          fill="var(--color-completed)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="incomplete"
          stackId="a"
          fill="var(--color-incomplete)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default ProgressChart;
