"use client";

import TitleCard from "@/components/modules/dashboard/TitleCard";
import ChartSection from "@/components/organisms/chart-section";
import RecentActivity from "@/components/organisms/recent-activity";
import StatsGrid from "@/components/organisms/stats-grid";
import { useDashboardData } from "@/hooks/use-dashboard-data";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { data, loading, error } = useDashboardData();

  return (
    <>
      <div className="p-6 space-y-6">
        <TitleCard title="Welcome to Dashboard" />

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-64"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-red-600 p-8"
          >
            <p>Error loading dashboard data</p>
          </motion.div>
        ) : (
          <>
            <StatsGrid />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <ChartSection chartData={data?.chartData || []} />
              <RecentActivity activities={data?.activities || []} />
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
