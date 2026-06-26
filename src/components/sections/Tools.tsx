"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const software = [
  {
    name: "AutoCAD",
    image: "/logos/Autocad.svg",
  },
  {
    name: "Revit",
    image: "/logos/Revit.svg",
  },
  {
    name: "STAAD.Pro",
    image: "/logos/staad.png",
  },
  {
    name: "RCDC",
    image: "/logos/rcdc.png",
  },
  {
    name: "Bluebeam Revu",
    image: "/logos/Bluebeam.png",
  },
  {
    name: "MS Excel",
    image: "/logos/excel.png",
  },
  
];


export default function Tools() {
  return (
    <section id="tools" className="overflow-hidden text-foreground scroll-mt-0">

      <div className="flex min-h-[50vh] flex-col justify-center py-22">
        <div className="mx-auto w-full max-w-[1320px] px-13">

        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
  Tools I Use
</h2>


<p className="mt-7 max-w-3xl text-lg leading-9 text-foreground/70">
  Software used for drawing review, structural coordination, digital
  takeoffs, estimate summaries, and construction documentation.
</p>
</div>
        <div className="relative mt-14 overflow-hidden">
  <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />



  <motion.div
  className="flex gap-8"
  animate={{
  x: [0, -3000],
}}
transition={{
  repeat: Infinity,
  duration: 120,
  ease: "linear",
}}
>
    {[
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
  ...software,
].map((tool, index) => (
      <div
  key={`${tool.name}-${index}`}
  className="flex min-w-[200px] items-center justify-center px-8"
>
        <div className="flex items-center gap-4 opacity-60 transition-all duration-800 hover:opacity-900 hover:scale-110">
  <Image
    src={tool.image}
    alt={tool.name}
    width={70}
    height={70}
    className="h-16 w-auto object-contain"
  />

  <span className="text-lg font-medium">
    {tool.name}
  </span>
</div>
      </div>
    ))}
  </motion.div>
</div>

{/* SECOND ROW */}
<div className="mx-auto mt-12 w-full max-w-[1320px] px-13">

  <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

  <div className="mt-10 grid gap-8 lg:grid-cols-[40%_60%]">

    {/* LEFT SIDE */}
    <div className="rounded-2xl border border-orange-500/20 p-6">

      <h3 className="mb-6 text-lg font-semibold text-orange-400">
        Others
      </h3>

      {/* Google + Microsoft */}
      <div className="grid gap-6 md:grid-cols-1">

        {/* Google Workspace */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/google-workspace.webp"
              alt="Google Workspace"
              width={36}
              height={36}
              className="h-10 w-auto"
            />
            <span className="font-medium">
              Google Workspace
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-4">
            <Image src="/logos/gmail.png" alt="" width={34} height={34} className="h-9 w-auto" />
            <Image src="/logos/calendar.png" alt="" width={34} height={34} className="h-9 w-auto" />
            <Image src="/logos/gdocs.png" alt="" width={34} height={34} className="h-9 w-auto" />
            <Image src="/logos/gdrive.webp" alt="" width={34} height={34} className="h-9 w-auto" />
            <Image src="/logos/gmeet.webp" alt="" width={34} height={34} className="h-9 w-auto" />
          </div>
        </div>

        {/* Microsoft */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/m365.png"
              alt="Microsoft 365"
              width={37}
              height={37}
              className="h-10 w-auto"
            />
            <span className="font-medium">
              Microsoft 365
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-4">
            <Image src="/logos/word.webp" alt="" width={34} height={34} className="h-8 w-auto" />
            <Image src="/logos/excel.png" alt="" width={34} height={32} className="w-8 h-auto object-contain" />
            <Image src="/logos/powerpoint.png" alt="" width={34} height={34} className="h-9 w-auto" />
            <Image src="/logos/teams.png" alt="" width={34} height={34} className="h-8 w-auto" />
            <Image src="/logos/onedrive.webp" alt="" width={34} height={34} className="h-7 w-auto" />
            <Image src="/logos/outlook.png" alt="" width={34} height={34} className="h-8 w-auto object-contain" />
          </div>
        </div>

      </div>

      {/* Communication + AI */}
      <div className="mt-8 grid gap-6 md:grid-cols-1">

        <div>
          
          <div className="flex flex-wrap gap-4">
            <Image src="/logos/facebook.png" alt="" width={32} height={32} className="w-10 h-auto" />
            <Image src="/logos/viber.svg" alt="" width={34} height={34} className="h-10 w-auto" />
            <Image src="/logos/whatsapp.png" alt="" width={36} height={34} className="h-10 w-auto" />
            <Image src="/logos/telegram.png" alt="" width={34} height={34} className="h-10 w-auto" />
            <Image src="/logos/zoom.png" alt="" width={34} height={34} className="h-10 w-auto" />
          </div>
        </div>

        <div>

          <div className="flex flex-wrap gap-4">
            <Image src="/logos/chatgpt.webp" alt="" width={34} height={34} />
            <Image src="/logos/claude.png" alt="" width={34} height={34} />
            <Image src="/logos/gemini.png" alt="" width={34} height={34} />
          </div>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="rounded-2xl border border-orange-500/20 p-6">

  <h3 className="mb-6 text-lg font-semibold text-orange-400">
    Technical Skills
  </h3>
  

  {/* Estimating */}
  <div className="mb-7">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
      Estimating
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        "Quantity Takeoff",
        "Cost Estimation",
        "BOQ Preparation",
        "Material Quantification",
        "Cost Analysis",
      ].map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/5
            px-4
            py-2
            text-sm
            transition-all
            duration-300
            hover:border-orange-500/50
            hover:bg-orange-500/10
            hover:text-orange-400
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Documentation */}
  <div className="mb-7">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
      Documentation
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        "Drawing Interpretation",
        "Drawing Review",
        "Tender Documentation",
      ].map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/5
            px-4
            py-2
            text-sm
            transition-all
            duration-300
            hover:border-orange-500/50
            hover:bg-orange-500/10
            hover:text-orange-400
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Coordination */}
  <div>
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
      Coordination
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        "Project Coordination",
        "Construction Planning",
        "BIM Modeling",
      ].map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/5
            px-4
            py-2
            text-sm
            transition-all
            duration-300
            hover:border-orange-500/50
            hover:bg-orange-500/10
            hover:text-orange-400
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

</div>

  </div>

</div>

      </div>
    </section>
  );
}
