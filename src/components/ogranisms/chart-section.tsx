"use client";

import Button from "@/components/atoms/button";
import Card from "@/components/atoms/card";

interface ChartData {
  month: string;
  value: number;
}

interface ChartSectionProps {
  chartData: ChartData[];
}

export default function ChartSection({ chartData }: ChartSectionProps) {
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </h3>
          <div className="flex space-x-2">
            <Button variant="primary" size="sm">
              6M
            </Button>
            <Button variant="ghost" size="sm">
              1Y
            </Button>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((data, index) => (
            <div
              key={data.month}
              className="flex-1 flex flex-col items-center animate-grow-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-500 hover:scale-105"
                style={{ height: `${(data.value / maxValue) * 200}px` }}
              />
              <span className="text-xs text-gray-600 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
