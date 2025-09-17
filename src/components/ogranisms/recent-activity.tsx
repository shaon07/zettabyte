"use client";

import Card from "@/components/atoms/card";

interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  avatar: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Recent Activity
        </h3>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 animate-slide-in hover:translate-x-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                {activity.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>{" "}
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
