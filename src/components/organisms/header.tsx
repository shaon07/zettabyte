"use client";

import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center px-4 font-bold col-span-2 sticky top-0 z-[99] bg-white shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Icon name="menu" size="md" />
          </Button>

          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        </div>
      </div>
    </header>
  );
}
