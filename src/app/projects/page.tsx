"use client";

import { useState } from "react";
import ProjectModal from "@/components/projects/ProjectModal";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";


export default function ProjectsPage() {

  const [selectedProject, setSelectedProject] = useState<
  (typeof projects)[number] | null
>(null);
  return (
    <main className="min-h-screen bg-background text-foreground">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <Link
          href="/#projects"
          className="mb-8 inline-flex text-sm text-[#F97316] hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-5xl font-bold">
          All Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/70">
          A collection of quantity takeoff, construction estimating,
          BIM coordination, and engineering documentation projects.
          Client information has been omitted due to confidentiality.
        </p>

        {/* FILTERS */}

        <div className="mt-14 flex flex-wrap gap-3">

          {[
            "All",
            "Estimating",
            "Quantity Takeoff",
            "BIM",
            "Documentation",
          ].map((item) => (

            <button
              key={item}
              className="
                rounded-full
                border
                border-[#F97316]/30
                px-5
                py-2
                text-sm
                transition
                hover:bg-[#F97316]/10
                hover:border-[#F97316]
              "
            >
              {item}
            </button>

          ))}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

  {/* REAL PROJECTS */}
  {projects.map((project, index) => (
    <div
      key={`${project.title}-${index}`}
      onClick={() => setSelectedProject(project)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#F97316]/50
        hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm uppercase tracking-widest text-[#F97316]">
            {project.category}
          </span>

          <p
  className="
    mt-2
    text-lg
    font-semibold
    transition-all
    duration-300
    group-hover:text-[#F97316]
    group-hover:translate-x-1
  "
>
  View Details →
</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-foreground/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.software.map((tool) => (
            <span
              key={tool}
              className="
                rounded-full
                border
                border-[#F97316]/30
                bg-[#F97316]/5
                px-3
                py-1
                text-xs
                font-medium
                text-[#F97316]
              "
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}

  {/* PLACEHOLDER CARDS */}
  {[1, 2, 3].map((item) => (
    <div
      key={`placeholder-${item}`}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-dashed
        border-border
        bg-card
        opacity-80
      "
    >
      <div className="aspect-[16/9] flex items-center justify-center bg-slate-200 dark:bg-slate-800">
        <span className="text-5xl text-slate-400">+</span>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold">
          Coming Soon
        </h2>

        <p className="mt-3 text-sm leading-7 text-foreground/70">
          More quantity takeoff and estimating projects will be uploaded soon.
        </p>

        <div className="mt-5">
          <span className="rounded-full border border-[#F97316]/30 bg-[#F97316]/5 px-3 py-1 text-xs text-[#F97316]">
            Upcoming
          </span>
        </div>
      </div>
    </div>
  ))}

</div>
        </div>

      </section>

      {selectedProject && (
  <ProjectModal
    project={selectedProject}
    projects={projects}
    onClose={() => setSelectedProject(null)}
  />
)}

    </main>
  );
}