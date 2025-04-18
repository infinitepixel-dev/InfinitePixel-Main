import { useEffect, useState } from "react"

const Settings = () => {
  const [twoFA, setTwoFA] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState("medium")
  const [notifications, setNotifications] = useState(true)

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedDark)
    document.documentElement.classList.toggle("dark", savedDark)

    const savedFontSize = localStorage.getItem("fontSize") || "medium"
    setFontSize(savedFontSize)
  }, [])

  const handleDarkModeToggle = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle("dark", newMode)
    localStorage.setItem("darkMode", String(newMode))
  }

  const handleFontSizeChange = (size) => {
    setFontSize(size)
    localStorage.setItem("fontSize", size)
  }

  return (
    <div className="w-full max-w-5xl p-10 mx-auto text-zinc-900 dark:text-white">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <section className="grid gap-6 sm:grid-cols-2">
        {/* Two-Factor Auth */}
        <fieldset className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800">
          <label htmlFor="twofa" className="font-medium">
            Enable Two-Factor Authentication
          </label>
          <div className="relative">
            <input
              id="twofa"
              type="checkbox"
              checked={twoFA}
              onChange={() => setTwoFA(!twoFA)}
              className="absolute w-0 h-0 opacity-0"
            />
            <div
              onClick={() => setTwoFA(!twoFA)}
              className={`w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                twoFA ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-all ${
                  twoFA ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>
        </fieldset>

        {/* Dark Mode */}
        <fieldset className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800">
          <label htmlFor="darkmode" className="font-medium">
            Dark Mode
          </label>
          <div className="relative">
            <input
              id="darkmode"
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeToggle}
              className="absolute w-0 h-0 opacity-0"
            />
            <div
              onClick={handleDarkModeToggle}
              className={`w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                darkMode ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-all ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>
        </fieldset>

        {/* Font Size */}
        <fieldset className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800">
          <label htmlFor="fontsize" className="font-medium">
            Font Size
          </label>
          <select
            id="fontsize"
            value={fontSize}
            onChange={(e) => handleFontSizeChange(e.target.value)}
            className="px-3 py-2 text-sm bg-white border rounded dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="small">Small</option>
            <option value="medium">Medium (Default)</option>
            <option value="large">Large</option>
          </select>
        </fieldset>

        {/* Notifications */}
        <fieldset className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800">
          <label htmlFor="notifications" className="font-medium">
            Email Notifications
          </label>
          <div className="relative">
            <input
              id="notifications"
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="absolute w-0 h-0 opacity-0"
            />
            <div
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                notifications ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-all ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>
        </fieldset>
      </section>
    </div>
  )
}

export default Settings
