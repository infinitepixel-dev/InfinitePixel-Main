import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "/images/project1.jpg",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/images/project2.jpg",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/images/project3.jpg",
    link: "https://example.com/project3",
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Our Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden transition rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <Button asChild>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default Projects
