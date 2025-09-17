export interface DashboardData {
  chartData: Array<{
    month: string;
    value: number;
  }>;
  activities: Array<{
    id: string;
    user: string;
    action: string;
    time: string;
    avatar: string;
  }>;
}
