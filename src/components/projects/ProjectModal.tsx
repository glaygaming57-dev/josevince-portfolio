"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  software: string[];
  scope: string[];
  output: string[];
  gallery: string[];
};

type Props = {
  project: Project;
  projects: Project[];
  onClose: () => void;
};

export default function ProjectModal({
  project,
  projects,
  onClose,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProject, setCurrentProject] = useState(project);
  useEffect(() => {
  setCurrentProject(project);
  setCurrentImage(0);
}, [project]);


  const nextImage = () =>
    setCurrentImage((currentImage + 1) % currentProject.gallery.length);

  const prevImage = () =>
    setCurrentImage(
      (currentImage - 1 + currentProject.gallery.length) %
        currentProject.gallery.length
    );

  return createPortal(
    (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-8">

      <div
  className="
  relative
  max-h-[92vh]
  w-full
  max-w-7xl
  overflow-hidden
  rounded-3xl
  bg-white
  text-slate-900
  border
  border-slate-200
  shadow-2xl
"
>

        {/* CLOSE */}

        <button
  onClick={onClose}
  className="
    absolute
    right-5
    top-3
    z-50
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    bg-black/70
    text-white
    shadow-lg
    backdrop-blur-md
    transition
    hover:bg-[#F97316]
    hover:scale-110
  "
>
  <X size={24} />
</button>

        <div className="max-h-[90vh] overflow-y-auto">

  {/* IMAGE */}

  <div className="relative bg-slate-100 px-0 py-3">

  <Image
    src={currentProject.gallery[currentImage]}
    alt={currentProject.title}
    width={1600}
    height={900}
    className="
      mx-auto
      w-full
      max-w-6xl
      rounded-xl
      border
      border-slate-300
      shadow-lg
      object-contain
      bg-white
    "
  />

    {/* LEFT */}

    <button
      onClick={prevImage}
      className="
        absolute
        left-1
        top-1/2
        -translate-y-1/2
        rounded-full
        bg-black/70
        p-2
        text-white
        hover:bg-[#F97316]
      "
    >
      <ChevronLeft size={28} />
    </button>

    {/* RIGHT */}

    <button
      onClick={nextImage}
      className="
        absolute
        right-1
        top-1/2
        -translate-y-1/2
        rounded-full
        bg-black/70
        p-2
        text-white
        hover:bg-[#F97316]
      "
    >
      <ChevronRight size={28} />
    </button>

  </div>

  {/* DETAILS */}

  <div className="space-y-8 p-10">

    <div>

      <p className="text-sm uppercase tracking-widest text-[#F97316]">
        {currentProject.category}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-foreground">
        {currentProject.title}
      </h2>

      <p className="mt-5 leading-8 text-muted-foreground">
        {currentProject.description}
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-3">

  {/* Scope */}
  <div>
    <h3 className="mb-3 font-semibold text-[#F97316]">
      Scope
    </h3>

    <ul className="space-y-2">
      {currentProject.scope.map((item) => (
        <li
          key={item}
          className="text-muted-foreground"
        >
          • {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Deliverables */}
  <div>
    <h3 className="mb-3 font-semibold text-[#F97316]">
      Deliverables
    </h3>

    <ul className="space-y-2">
      {currentProject.output.map((item) => (
        <li
          key={item}
          className="text-muted-foreground"
        >
          • {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Software */}
  <div>
    <h3 className="mb-3 font-semibold text-[#F97316]">
      Software Used
    </h3>

    <div className="flex flex-wrap gap-2">
      {currentProject.software.map((tool) => (
        <span
          key={tool}
          className="
            rounded-full
            border
            border-[#F97316]/40
            px-3
            py-1
            text-xs
            font-medium
          "
        >
          {tool}
        </span>
      ))}
    </div>
  </div>

</div>

  </div>
  <div className="mt-10 flex justify-between border-t border-slate-300 pt-6">

  <button
    onClick={() => {
      const currentIndex = projects.findIndex(
        (p) => p.title === currentProject.title
      );

      const prev =
        projects[
          (currentIndex - 1 + projects.length) %
          projects.length
        ];

      setCurrentProject(prev);
      setCurrentImage(0);
    }}
    className="font-medium text-[#F97316] hover:underline"
  >
    ← Previous Project
  </button>

  <button
    onClick={() => {
      const currentIndex = projects.findIndex(
        (p) => p.title === currentProject.title
      );

      const next =
        projects[
          (currentIndex + 1) %
          projects.length
        ];

      setCurrentProject(next);
      setCurrentImage(0);
    }}
    className="font-medium text-[#F97316] hover:underline"
  >
    Next Project →
  </button>

</div>

</div>

      </div>

    </div>
),
document.body
);
}