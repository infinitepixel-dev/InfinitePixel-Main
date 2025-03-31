import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

const projects = [
  {
    title: "Jawfane",
    description:
      "Jawfane is a metal band based out of Nashville, TN. They are a 5-piece band with a heavy sound and a unique style.",
    image: "https://placehold.co/300x300",
    siteImage: "https://placehold.co/600x400",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    image: "https://placehold.co/300x300",
    siteImage: "https://placehold.co/600x400",
  },
  {
    title: "Project Three",
    description: "A brief description of project three.",
    image: "https://placehold.co/300x300",
    siteImage: "https://placehold.co/600x400",
  },
]

export default function Portfolio() {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)
  const overlayRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }
    )
  }, [])

  const handleCardClick = (image) => {
    setSelectedImage(image)
    setIsImageEnlarged(true)
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 })
    gsap.fromTo(
      imageRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
  }

  const handleOverlayClick = () => {
    setIsImageEnlarged(false)
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
    gsap.to(imageRef.current, { scale: 0.5, opacity: 0, duration: 0.5 })
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-10 text-white bg-gray-900">
      <h1 className="mb-10 text-4xl font-bold">Portfolio</h1>
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleCardClick(project.siteImage)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>

      {isImageEnlarged && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <img
            ref={imageRef}
            src={selectedImage}
            alt="Enlarged project"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  )
}
