import { MotionOnLoad } from "@/components/motion/MotionElements";
import Image from "next/image";

export default function Hero() {
  return (
    <section
 id="home"
 className="relative min-h-screen overflow-hidden text-foreground scroll-mt-28"
>


      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-8 pt-20 pb-16">

        <div className="relative border border-[#F97316]/60 p-5">

        {/* INNER BORDER */}
        <div className="relative border border-[#F97316]/60">
              

          {/* Main Hero Content */}
            <div className="grid min-h-[70vh] lg:min-h-[620px] lg:grid-cols-[32%_68%] lg:gap-8">
            
            {/* LEFT SIDE */}
                <div className="p-3 pt-9 lg:pl-14">

  <MotionOnLoad delay={0.1}>
    
    {/* IMAGE CARD */}
    <div className="ml-8 w-full max-w-[340px] image-hover-card relative aspect-[4/5] overflow-hidden rounded-[30px]">
      <Image
  src="/images/profile.JPG"
  alt="Jose Vince Camagay"
  fill
  sizes="(max-width: 1024px) 100vw, 160px"
  className="object-cover"
/>
    </div>

  </MotionOnLoad>

  {/* TEXT BLOCK (IMPORTANT: OUTSIDE MotionOnLoad) */}
  <div className="mt-6">

    <div className="mt-4 ml-2 max-w-[340px]">

      <p className="ml-20 text-lg font-semibold text-[#F97316] inline-block whitespace-nowrap tracking-[0.12em]">
  Licensed Civil Engineer
</p>

      <div className="relative -mt-7 flex items-center translate-x-5">
        <div className="h-14 w-14 rounded-full border border-[#F97316]/60" />
        <div className="-ml-[1px] h-px w-[260px] bg-[#F97316]/60" />
      </div>

      <div className="relative -mt-5 ml-21 flex justify-start gap-38 text-xs uppercase tracking-[0.2em] text-foreground/50">
  <span>SCALE:</span>
  <span className="relative -left-1">NTS</span>
</div>

    </div>

  </div>

</div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col justify-start p-10 pt-12 lg:pl-24 lg:pr-20 lg:pt-14">

              <MotionOnLoad>

                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#F97316]">
                  PROJECT OVERVIEW:
                </p>

              

                <h1 className="max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
  Engineering Precision from Drawing Review to Cost Analysis.
</h1>

<p className="mt-8 max-w-4xl text-lg leading-8 text-foreground/70">
  Translating design intent into quantifiable construction reality
  through precise estimating, quantity takeoffs, and cost analysis
  for better project decisions.
</p>

<p className="mt-10 text-lg font-semibold text-[#F97316]">
  Quantity Surveying • Construction Estimating • BIM Modeling
</p>
        

              </MotionOnLoad>

            </div>
          </div>

              {/* Bottom Blueprint Row */}
<div className="relative z-20 -mt-8 border border-[#F97316]/60 bg-transparent">

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4">

    {/* DETAILS */}
    <div className="border-r border-[#F97316]/60 p-4">
      <p className="text-xs uppercase text-foreground/50">PROJECT DETAILS:</p>

      <div className="mt-4 flex flex-wrap gap-3">

  {/* CONTACT */}
  <a
    href="#contact"
    className="
group
relative
overflow-hidden
rounded-md
border
border-[#F97316]/60
px-4
py-2
text-sm
text-foreground
transition-all
duration-300
hover:border-[#F97316]
hover:-translate-y-1
"
  >
    <span className="relative z-10">
  Contact Me
</span>

<div className="absolute inset-0 translate-y-full bg-[#F97316]/15 transition-transform duration-300 group-hover:translate-y-0" />
  </a>

  {/* CV */}
  <a
    href="/files/Jose-Vince-Camagay-CV.pdf"  //DOWNLOADABLE CV LINK HERE
    download
    className="
group
relative
overflow-hidden
rounded-md
border
border-[#F97316]/60
px-4
py-2
text-sm
text-foreground
transition-all
duration-300
hover:border-[#F97316]
hover:-translate-y-1
"
  >
    <span className="relative z-10">
  View CV
</span>

<div className="absolute inset-0 translate-y-full bg-[#F97316]/15 transition-transform duration-300 group-hover:translate-y-0" />
  </a>

</div>
    </div>

    {/* BASED IN */}
    <div className="border-r border-[#F97316]/60 p-4 flex flex-col">
      <p className="text-xs uppercase text-foreground/50">Based In:</p>

      <div className="my-3 h-px w-full bg-[#F97316]/40" />

      <p className="text-[#F97316]">
        Taguig City, Philippines
      </p>
    </div>

    {/* TIME ZONE */}
    <div className="border-r border-[#F97316]/60 p-4 flex flex-col">
      <p className="text-xs uppercase text-foreground/50">Time Zone:</p>

      <div className="my-3 h-px w-full bg-[#F97316]/40" />

      <p className="text-[#F97316]">
        UTC +08:00
      </p>
    </div>

    {/* SHEET */}
    <div className="p-4 flex flex-col">
      <p className="text-xs uppercase text-foreground/50">Availability:</p>

      <div className="my-3 h-px w-full bg-[#F97316]/40" />

      <p className="text-[#F97316]">
        REMOTE | PROJECT-BASED
      </p>
    </div>

  </div> 

</div>
</div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <a
    href="#about"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F97316]/50 text-[#F97316] transition hover:border-[#F97316] hover:bg-[#F97316]/10"
  >
    ↓
  </a>
</div>
    </section>
  );
}