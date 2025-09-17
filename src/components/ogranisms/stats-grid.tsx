"use client";

import StatCard from "@/components/molecules/stat-card";
import { motion } from "framer-motion";

const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up" as const,
    icon: "dashboard",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.3%",
    trend: "up" as const,
    icon: "users",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "-2.4%",
    trend: "down" as const,
    icon: "posts",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+5.2%",
    trend: "up" as const,
    icon: "dashboard",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function StatsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.title}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <StatCard {...stat} />
        </motion.div>
      ))}
    </motion.div>
  );
}
