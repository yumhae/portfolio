import { NavigationMenu } from "@/components/ui/navigation-menu"
import { HomeSection } from "@/components/sections/home"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationMenu />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}