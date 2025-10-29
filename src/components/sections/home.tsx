import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function HomeSection() {
  return (
    <section id="home" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="/backup/image/profilepicture.jpg"
              alt="Clariz Joy Lolong"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Clariz Joy Lolong
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aspiring Developer & Lifelong Learner
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild variant="default" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}