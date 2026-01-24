"use strict";

import React from "react";
import { ChevronRight } from "lucide-react";
import Toggle from "./Toggle";

interface SettingsItemProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  value?: string;
  type?: "toggle" | "navigation" | "text";
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  onClick?: () => void;
}

export default function SettingsItem({
  icon,
  title,
  description,
  value,
  type = "navigation",
  enabled = false,
  onToggle,
  onClick,
}: SettingsItemProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer ${
        onClick ? "active:bg-gray-100" : ""
      }`}
      onClick={type !== "toggle" ? onClick : undefined}
    >
      <div className="flex items-center space-x-4">
        {icon && <div className="text-gray-500">{icon}</div>}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{title}</span>
          {description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {type === "toggle" && onToggle && (
          <Toggle enabled={enabled} onChange={onToggle} />
        )}
        {type === "text" && value && (
          <span className="text-sm text-gray-600 font-mono">{value}</span>
        )}
        {type === "navigation" && (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </div>
    </div>
  );
}
