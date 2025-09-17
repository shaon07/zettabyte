"use client";

import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
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
