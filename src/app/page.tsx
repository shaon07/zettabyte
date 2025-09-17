"use client";

import Card from "@/components/atoms/card";
import ChartSection from "@/components/organisms/chart-section";
import Header from "@/components/organisms/header";
import RecentActivity from "@/components/organisms/recent-activity";
import Sidebar from "@/components/organisms/sidebar";
import StatsGrid from "@/components/organisms/stats-grid";
import { DashboardData, mockData } from "@/resource/dashboard-data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchData = async () => {
      try {
        setLoading(true);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        setData(mockData);
      } catch (err) {
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gray-50"
    >
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className={`flex-1 transition-all duration-300`}>
          <div className="p-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome to Dashboard
                      </h1>
                      <p className="text-gray-600">
                        Here's your business overview and key metrics at a
                        glance.
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

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
        </main>
      </div>
    </motion.div>
  );
}
