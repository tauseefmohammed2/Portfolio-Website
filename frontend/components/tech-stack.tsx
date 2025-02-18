export function TechStack() {
  const technologies = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Firebase", icon: "firebase" },
    { name: "Git", icon: "git" },
    { name: "VS Code", icon: "vscode" },
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
      <p className="text-muted-foreground mb-6">
        Technologies I use for development and programming purposes. Including languages,
        frameworks, IDEs, and various software.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 p-2 rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

