"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../organisms/header";
import Sidebar from "../organisms/sidebar";
type PageRenderProps = {
  children: React.ReactNode;
};

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

export default function PageRender({ children }: PageRenderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
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
            {children}
          </main>
        </div>
      </motion.div>
    </>
  );
}
