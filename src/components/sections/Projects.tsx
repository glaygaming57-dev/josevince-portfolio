  import Link from "next/link";
import { MotionCard, MotionSection } from "@/components/motion/MotionElements";

  const featuredProjects = [
  {
    title: "Residential Building",
category: "Quantity Takeoff",
image: "/images/projects/project1.jpg",
description:
"Complete quantity takeoff and BOQ preparation for a multi-storey residential project.",
software: ["CostX","Bluebeam","Excel"],
  },
  {
    title: "Residential Building",
category: "Quantity Takeoff",
image: "/images/projects/project1.jpg",
description:
"Complete quantity takeoff and BOQ preparation for a multi-storey residential project.",
software: ["CostX","Bluebeam","Excel"],
  },
  {
    title: "Residential Building",
category: "Quantity Takeoff",
image: "/images/projects/project1.jpg",
description:
"Complete quantity takeoff and BOQ preparation for a multi-storey residential project.",
software: ["CostX","Bluebeam","Excel"],
  },
];

  export default function Projects() {
    return (
      <section id="projects" className="relative z-10 min-h-screen overflow-hidden text-foreground scroll-mt-0">
      
        <MotionSection className="mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 pt-24 pb-10 sm:px-8 lg:pt-32 lg:pb-14">
          
          <h2 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Projects I Worked On
          </h2>

          <p className="mt-7 max-w-3xl text-xl leading-9 text-foreground/70">
            Below are sample projects I have worked on. Project names and client details have been kept confidential.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <MotionCard
  key={`${project.title}-${index}`}
  delay={index * 0.08}
  className="
    group
    overflow-hidden
    rounded-3xl
    border
    border-border
    bg-card
    shadow-[0_0_30px_rgba(249,115,22,0.05)]
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#F97316]/50
    hover:shadow-[0_0_50px_rgba(249,115,22,0.18)]
  "
>

  {/* IMAGE */}

  <div className="relative aspect-[16/10] overflow-hidden">

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

    <div className="absolute bottom-6 left-6 translate-y-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

      <span className="text-sm uppercase tracking-widest text-[#F97316]">
        Confidential Project
      </span>

      <p className="mt-2 text-lg font-semibold">
        View Details →
      </p>

    </div>

  </div>

  {/* CONTENT */}

  <div className="p-6">

    <span className="text-sm uppercase tracking-widest text-[#F97316]">
      Quantity Takeoff
    </span>

    <h3 className="mt-3 text-2xl font-semibold">
      {project.title}
    </h3>

    <p className="mt-4 text-sm leading-7 text-foreground/70">
      {project.description}
    </p>

  </div>

</MotionCard>
            ))}
          </div>

          {/* Bottom Fade */}
<div className="relative overflow-hidden pb-20">
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32
bg-gradient-to-b
from-transparent
via-background/70
to-background" />
</div>
<div className="-mt-6 relative z-20 flex flex-col items-center gap-4">

<p className="text-sm text-foreground/60">
More projects available
</p>

<Link
href="/projects"
className="
rounded-full
border
border-[#F97316]/60
px-8
py-3
font-medium
transition-all
hover:bg-[#F97316]
hover:text-white
"
>
View All Projects →
</Link>

</div>

        </MotionSection>
      </section>
    );
  }
