import Image from "next/image"

export function Hero() {
  return (
    <section className="container flex flex-col items-center text-center gap-4 pt-32 pb-16">
      <div className="flex flex-col items-center gap-8 max-w-[750px]">
        <div className="flex items-center gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m Your Name 👋
            </h1>
            <p className="text-xl text-muted-foreground">
              Software Engineer and Security Researcher
            </p>
            <p className="text-muted-foreground">
              focusing on AI, and Security. Happy reading! 😊
            </p>
          </div>
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-full hidden md:block"
            priority
          />
        </div>

        <div className="space-y-4 text-left">
          <h2 className="font-semibold text-xl">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m passionate about building innovative AI solutions and finding security vulnerabilities. I&apos;ve{" "}
            <a href="#" className="link-underline">
              discovered 8 security vulnerabilities in Google Chrome, earned over $23,000 in rewards
            </a>{" "}
            and ranked in Google&apos;s top-100 security researchers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m currently focused on developing{" "}
            <a href="#" className="link-underline">
              JsonGPT, an AI-powered API that provides structured JSON outputs
            </a>
            , and have also{" "}
            <a href="#" className="link-underline">
              participated in Google AI hackathons
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

