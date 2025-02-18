import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"

export function Projects() {
  const projects = [
    {
      title: "JsonGPT",
      date: "2024 - Present",
      description: "A simple API that helps developers generate structured JSON data from AI models like OpenAI, Gemini, Meta LLama and more. Features include JSON validation, caching, streaming, and a free playground to test prompts.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Cloudflare", "OpenAI", "Meta LLama", "Google Gemini", "TailwindCSS", "Shadcn UI"],
      link: { text: "Website", url: "#" }
    },
    {
      title: "DarksAI: Mystery Stories Mobile Game",
      date: "2024 - Present",
      description: "A mobile mystery game powered by Gemini AI for story generation and interactions, ElevenLabs for voice synthesis, and Runway AI for visuals. Players solve cases through voice or text chat by interacting with an AI Agent.",
      image: "/placeholder.svg",
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Gemini API", "ElevenLabs", "Runway AI"],
      link: { text: "AI Google Dev", url: "#" }
    },
    // Add more projects as needed
  ]

  return (
    <section className="container max-w-[900px] mx-auto py-16">
      <SectionHeading
        pill="My Projects"
        title="Featured Projects"
        description="I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favorite projects below."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button asChild variant="outline" className="rounded-full">
                <a href={project.link.url} target="_blank">
                  {project.link.text}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

