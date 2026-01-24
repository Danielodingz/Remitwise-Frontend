"use strict";

import React from "react";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsSection({
  title,
  children,
}: SettingsSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </h2>
      <div className="bg-white border-t border-b border-gray-200 divide-y divide-gray-200">
        {children}
      </div>
    </div>
  );
}
