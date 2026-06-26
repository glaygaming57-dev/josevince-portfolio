  import { MotionCard, MotionSection } from "@/components/motion/MotionElements";

  const projects = [
    {
      title: "Project Title Placeholder",
      description:
        "Estimating project placeholder for quantity takeoff, material review, and cost summary preparation.",
    },
    {
      title: "Project Title Placeholder",
      description:
        "Engineering project placeholder focused on drawing review, scope checking, and construction documentation.",
    },
    {
      title: "Project Title Placeholder",
      description:
        "Cost analysis project placeholder for comparing quantities, unit rates, and bid-ready estimate notes.",
    },
  ];

  export default function Projects() {
    return (
      <section id="projects" className="relative z-10 min-h-screen overflow-hidden text-foreground scroll-mt-0">
      
        <MotionSection className="mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:py-32">
          
          <h2 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Projects I Worked On
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-foreground/70">
            Selected estimating, quantity takeoff, and engineering projects.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionCard
                key={`${project.title}-${index}`}
                delay={index * 0.08}
                className="rounded-3xl border border-border bg-card p-5 shadow-[0_0_40px_rgba(249,115,22,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/50 hover:shadow-[0_0_60px_rgba(249,115,22,0.18)]"
              >
                <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-dashed border-border bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] px-6 text-center text-sm font-semibold uppercase leading-6 tracking-widest text-slate-400">
                  Project Thumbnail Placeholder
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-7 text-foreground">
                    {project.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-[#F97316]/40 bg-[#F97316]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                    Coming Soon
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
              </MotionCard>
            ))}
          </div>
        </MotionSection>
      </section>
    );
  }
