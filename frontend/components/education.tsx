import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const education = [
    {
      school: "University Name",
      degree: "Master's in Computer Science",
      date: "2020 - 2022",
      courses: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
    },
    // Add more education entries as needed
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    // Add more certifications as needed
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-8">Education & Certifications</h2>
      <div className="grid gap-6">
        {education.map((edu) => (
          <Card key={edu.degree}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription>{edu.school} • {edu.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Notable Coursework:</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                {edu.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
        
        <h3 className="text-xl font-bold mt-6 mb-4">Certifications</h3>
        <div className="grid gap-4">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

