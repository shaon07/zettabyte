"use client";

import { motion } from "framer-motion";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface UserRowProps {
  user: User;
  onClick: () => void;
  index?: number;
}

const rowVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: index * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

export default function UserRow({ user, onClick, index = 0 }: UserRowProps) {
  return (
    <motion.tr
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{
        backgroundColor: "rgb(249 250 251)",
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.99 }}
      className="cursor-pointer transition-colors"
      onClick={onClick}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span className="text-blue-600 font-medium text-sm">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </motion.div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.company.name}</div>
      </td>
    </motion.tr>
  );
}
