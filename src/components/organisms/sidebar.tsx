"use client";

import Icon from "@/components/atoms/icon";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "posts", label: "Posts", href: "/posts" },
  { icon: "users", label: "Users", href: "/users" },
  { icon: "profile", label: "Profile", href: "/profile" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isDesktop ? 0 : isOpen ? 0 : "-100%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={cn(
          "fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 lg:translate-x-0 lg:static lg:z-auto"
        )}
      >
        <div className="p-6 pt-20 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          </motion.div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <Icon name={item.icon} size="md" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  );
}
