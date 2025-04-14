import { useRef } from "react"
import { FaReact } from "react-icons/fa"
import { FaClover, FaBootstrap } from "react-icons/fa6"
import { SiTailwindcss } from "react-icons/si"
import { gsap } from "gsap"

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

  const cardRefs = useRef([])

  const handleMouseEnter = (idx) => {
    gsap.to(cardRefs.current[idx], {
      scale: 1.015,
      ease: "power1.out",
      duration: 0.3,
    })
  }

  const handleMouseLeave = (idx) => {
    gsap.to(cardRefs.current[idx], {
      scale: 1,
      ease: "power1.inOut",
      duration: 0.3,
    })
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-10 text-white bg-gradient-to-b from-slate-800 to-slate-600">
      {/* Intro / Hero Section */}
      <h1 className="mt-16 mb-4 text-5xl font-bold text-center">
        Beautiful, Functional Websites That Convert
      </h1>
      <p className="max-w-3xl mb-8 text-xl text-center">
        We specialize in building modern, responsive websites that help your
        business stand out and grow. Whether you&apos;re a local brand or a
        growing online presence, we create tailored digital experiences that
        work.
      </p>

      <a
        href="/contact"
        className="px-6 py-3 mb-12 text-lg font-semibold text-white transition duration-300 bg-yellow-500 rounded-full hover:bg-yellow-600"
      >
        Let&apos;s Build Something Together
      </a>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="p-5 text-center transform rounded-lg shadow-lg bg-gradient-to-bl from-sky-700 to-sky-900"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
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
              <div className="flex justify-center gap-4 mt-3 text-2xl text-yellow-500">
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
