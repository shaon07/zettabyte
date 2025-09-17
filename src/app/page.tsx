"use client";
import Button from "@/components/modules/button";
import Card from "@/components/modules/card";
import { motion } from "framer-motion";
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

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-gray-50"
    >
      <div className="h-screen">
        <h1 className="text-black">header</h1>

        <div className="flex h-full">
          <div className="w-64 bg-gray-500 h-full">
            <h2 className="text-black">sidebar</h2>
          </div>

          <div className="flex-1 bg-amber-50 h-full">
            <div className="flex flex-col gap-2">
              <Button>primary button</Button>
              <Card>
                <p className="text-black">card content</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
