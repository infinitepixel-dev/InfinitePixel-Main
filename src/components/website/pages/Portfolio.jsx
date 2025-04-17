import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { FaClover, FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { gsap } from "gsap";

export default function Portfolio() {
  const navigate = useNavigate();

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
      link: "", //TODO - Add URL Once bugfixes on barbshop are resolved https://infinitepixel-dev.github.io/BarberShop/
    },
  ];

  const cardRefs = useRef([]);

  const handleMouseEnter = (idx) => {
    gsap.to(cardRefs.current[idx], {
      scale: 1.015,
      ease: "power1.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(cardRefs.current[idx], {
      scale: 1,
      ease: "power1.inOut",
      duration: 0.3,
    });
  };

  //On Click, navigate to home and then output #contact-form to scroll to the bottom on the homepage.
  const handleClick = () => {
    navigate("/", { replace: false });

    // Delay to wait for DOM to mount, then scroll
    setTimeout(() => {
      const target = document.getElementById("contact-form");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust delay if needed based on your render speed
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-slate-800 to-slate-600 p-10 min-h-screen text-white">
      {/* Intro / Hero Section */}
      <h1 className="mt-16 mb-4 font-bold text-5xl text-center">
        Beautiful, Functional Websites That Convert
      </h1>
      <p className="mb-8 max-w-3xl text-xl text-center">
        We specialize in building modern, responsive websites that help your
        business stand out and grow. Whether you&apos;re a local brand or a
        growing online presence, we create tailored digital experiences that
        work.
      </p>

      <a
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-yellow-600 mb-12 px-6 py-3 rounded-full font-semibold text-white text-lg transition duration-300"
      >
        Let&apos;s Build Something Together
      </a>

      {/* Projects Grid */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-gradient-to-bl from-sky-700 to-sky-900 shadow-lg p-5 rounded-lg text-center transform"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-md w-full cursor-pointer"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-md w-full"
              />
            )}

            <h2 className="font-semibold text-2xl">{project.title}</h2>
            <p className="mt-2 mb-3">{project.description}</p>

            {project.techIcons && (
              <div className="flex justify-center gap-4 mt-3 text-yellow-500 text-2xl">
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
  );
}
