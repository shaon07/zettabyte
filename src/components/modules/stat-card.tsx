import Card from "@/components/atoms/card";
import Icon from "@/components/atoms/icon";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export default function StatCard({
  title,
  value,
  change,
  trend,
  icon,
}: StatCardProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            <Icon
              name={trend === "up" ? "trendingUp" : "trendingDown"}
              size="sm"
              className={cn(
                "mr-1",
                trend === "up" ? "text-green-600" : "text-red-600"
              )}
            />
            <span
              className={cn(
                "text-sm font-medium",
                trend === "up" ? "text-green-600" : "text-red-600"
              )}
            >
              {change}
            </span>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon name={icon} size="lg" className="text-blue-600" />
        </div>
      </div>
    </Card>
  );
}
