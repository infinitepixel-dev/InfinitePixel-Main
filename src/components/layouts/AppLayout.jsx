import { Link } from "react-router-dom"

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 min-h-screen p-6 space-y-6 text-white bg-blue-800">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="flex flex-col space-y-4 text-sm">
          <Link
            to="/settings"
            className="transition-colors hover:text-blue-200 focus:text-blue-400"
          >
            Settings
          </Link>
          <Link
            to="/analytics"
            className="transition-colors hover:text-blue-200 focus:text-blue-400"
          >
            Analytics
          </Link>
          <Link
            to="/reports"
            className="transition-colors hover:text-blue-200 focus:text-blue-400"
          >
            Reports
          </Link>
          {/* Additional nav links can be added here */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}

export default AppLayout
