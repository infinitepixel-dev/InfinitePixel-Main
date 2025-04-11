export default function Portfolio() {
  const projects = [
    {
      title: "Jawfane",
      description:
        "Jawfane is a Metalcore/Hardcore Band based in Nashville, TN",
      image: "/images/portfolio-jawfane.png",
      link: "https://jawfane.com",
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen p-10 text-white bg-gray-900">
      <h1 className="mt-16 mb-10 text-4xl font-bold">Portfolio</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 text-center bg-gray-800 rounded-lg shadow-lg"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-4 rounded-md cursor-pointer"
              />
            </a>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
