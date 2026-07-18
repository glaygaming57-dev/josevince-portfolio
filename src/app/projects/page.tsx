import Link from "next/link";

const projects = [
  {
    title: "Residential Building",
    category: "Quantity Takeoff",
    software: "CostX • Bluebeam • Excel",
  },
  {
    title: "Commercial Building",
    category: "Construction Estimation",
    software: "Bluebeam • Excel",
  },
  {
    title: "Structural BIM Project",
    category: "BIM Coordination",
    software: "Revit • AutoCAD",
  },
  {
    title: "Tender Documentation",
    category: "Documentation",
    software: "PDF-XChange • Excel",
  },
];

export default function ProjectsPage() {
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

        </div>

        {/* PROJECT GRID */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                transition
                duration-300
                hover:-translate-y-2
                hover:border-[#F97316]/50
              "
            >

              {/* THUMBNAIL */}

              <div className="aspect-[16/10] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="p-6">

                <span className="text-sm text-[#F97316]">
                  {project.category}
                </span>

                <h2 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm text-foreground/70">
                  {project.software}
                </p>

                <button className="mt-8 text-[#F97316] transition group-hover:translate-x-1">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}