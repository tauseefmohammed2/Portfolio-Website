interface SectionHeadingProps {
  pill: string
  title: string
  description: string
}

export function SectionHeading({ pill, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4 text-center mb-12">
      <div className="inline-block px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium">
        {pill}
      </div>
      <h2 className="text-[3.5rem] font-extrabold tracking-[-0.02em] leading-none">
        {title}
      </h2>
      <p className="text-muted-foreground/80 text-lg max-w-[750px] mx-auto">
        {description}
      </p>
    </div>
  )
}

