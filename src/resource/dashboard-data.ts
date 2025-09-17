import { DashboardData } from "@/types";

export const mockData: DashboardData = {
  chartData: [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 5000 },
    { month: "Apr", value: 4500 },
    { month: "May", value: 6000 },
    { month: "Jun", value: 5500 },
  ],
  activities: [
    {
      id: "1",
      user: "John Doe",
      action: "completed a purchase",
      time: "2 minutes ago",
      avatar: "JD",
    },
    {
      id: "2",
      user: "Sarah Wilson",
      action: "updated their profile",
      time: "5 minutes ago",
      avatar: "SW",
    },
    {
      id: "3",
      user: "Mike Johnson",
      action: "left a review",
      time: "10 minutes ago",
      avatar: "MJ",
    },
    {
      id: "4",
      user: "Emily Davis",
      action: "signed up for newsletter",
      time: "15 minutes ago",
      avatar: "ED",
    },
  ],
};
