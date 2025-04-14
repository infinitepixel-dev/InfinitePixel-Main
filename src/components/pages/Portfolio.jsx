import { FaReact } from "react-icons/fa"
import { FaClover, FaBootstrap } from "react-icons/fa6"
import { SiTailwindcss } from "react-icons/si"

export default function Portfolio() {
  const projects = [
    {
      title: "Jawfane",
      description:
        "Jawfane is a Metalcore/Hardcore Band based in Nashville, TN",
      image: "/images/portfolio-jawfane.png",
      techIcons: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaClover />, name: "GSAP" },
      ],
      link: "https://jawfane.com",
    },
    {
      title: "Fresh Cuts",
      description:
        "A locally owned barbershop providing top-tier grooming services",
      image: "/images/barber.png",
      techIcons: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaClover />, name: "GSAP" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
      link: "",
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen p-10 text-white bg-gray-900">
      <h1 className="mt-16 mb-10 text-4xl font-bold">Portfolio</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-5 text-center bg-gray-800 rounded-lg shadow-lg"
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-4 rounded-md cursor-pointer"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-4 rounded-md"
              />
            )}

            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 mb-3">{project.description}</p>

            {project.techIcons && (
              <div className="flex justify-center gap-4 mt-3 text-2xl text-cyan-300">
                {project.techIcons.map((tech, i) => (
                  <span key={i} title={tech.name} className="cursor-help">
                    {tech.icon}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
