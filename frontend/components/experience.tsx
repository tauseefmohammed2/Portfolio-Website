import Image from "next/image"
import { SectionHeading } from "./section-heading"

export function Experience() {
  const experience = [
    {
      company: "CUI (Software house)",
      role: "Senior Full Stack .NET Developer",
      date: "July 2017 - Present",
      description: `Full-stack development of enterprise web applications using .NET Core
        and modern web technologies. Implemented complex business logic and
        data access layers using C#, Entity Framework, and various SQL
        databases (MS SQL, Oracle, PostgreSQL). Built responsive front-end
        interfaces with HTML5, CSS3 (Sass), JavaScript (ES6+) and UI frameworks
        like Bootstrap and UIKit. Followed software architecture best practices
        including DDD, Onion Architecture, SOLID principles and design patterns.
        Key responsibilities included developing RESTful APIs, writing
        unit/integration tests (TDD), setting up CI/CD pipelines in Azure DevOps,
        and deploying to IIS. Created technical documentation and provided
        problem-solving expertise across the full development stack.`
    }
  ]

  const education = [
    {
      school: "Politechnika Wrocławska",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      date: "2013 - 2017",
      logo: "/placeholder.svg"
    }
  ]

  const certifications = [
    {
      name: "AI-102 - Azure AI Engineer",
      issuer: "Microsoft",
      date: "2024-06",
      logo: "/placeholder.svg"
    },
    {
      name: "CKAD: Certified Kubernetes Application Developer",
      issuer: "The Linux Foundation",
      date: "2023-09",
      logo: "/placeholder.svg"
    }
  ]

  return (
    <section className="container max-w-[900px] mx-auto py-16">
      <SectionHeading
        pill="Experience & Education"
        title="Experience & Education"
        description="Here's a summary of my professional journey and educational background in software development."
      />

      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Experience</h3>
          {experience.map((exp) => (
            <div key={exp.company} className="flex gap-4">
              <div className="mt-1 flex-shrink-0 rounded-full bg-secondary w-8 h-8 flex items-center justify-center">
                <span className="text-secondary-foreground font-semibold">
                  {exp.company[0]}
                </span>
              </div>
              <div className="space-y-2 flex-grow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Education</h3>
          {education.map((edu) => (
            <div key={edu.school} className="flex gap-4 items-center">
              <Image
                src={edu.logo}
                alt={edu.school}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{edu.school}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Certifications</h3>
          {certifications.map((cert) => (
            <div key={cert.name} className="flex gap-4 items-center">
              <Image
                src={cert.logo}
                alt={cert.issuer}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

