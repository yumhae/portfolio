import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Flappy Fish Game",
    description: "A fun web-based game inspired by Flappy Bird, made with HTML, CSS, and JavaScript. Navigate your fish through obstacles and see how far you can go!",
    image: "/backup/image/flappy fish.png",
    link: "https://yumhae.github.io/flappy-fish/"
  },
  {
    title: "Period Tracker App",
    description: "A simple web app that helps track menstrual cycles with a built-in calendar feature. Stay organized and plan ahead with ease.",
    image: "/backup/image/periodtracker.png",
    link: "https://yumhae.github.io/period-tracker/"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}