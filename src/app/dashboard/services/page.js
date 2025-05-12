import Services from "./Services"

export const metadata = {
  title: "Our Services | Web Design Company",
  description: "Explore our professional web design and development services.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="text-center py-16 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">
          Discover how we can help elevate your brand online.
        </p>
      </header>

      <Services />

      <footer className="mt-16 py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </footer>
    </main>
  )
}
