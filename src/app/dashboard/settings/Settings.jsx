"use client";

import ThemeSwitch from "@ui/ThemeSwitch";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="bg-slate-50 dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Appearance
        </h2>
        <div className="flex justify-between items-center">
          <ThemeSwitch />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Notifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Notification preferences will be configurable here in the future.
        </p>
      </section>
    </div>
  );
}
