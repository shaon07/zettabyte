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
        className="bg-gray-50 h-screen grid grid-cols-[1fr] grid-rows-[60px_1fr] lg:grid-cols-[256px_1fr] grid-areas"
      >
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="p-4 overflow-y-auto h-[calc(100vh-60px)]">
          {children}
        </main>
      </motion.div>
    </>
  );
}
