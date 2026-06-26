import { MotionCard, MotionSection } from "@/components/motion/MotionElements";
import Image from "next/image";

const contactMethods = [
  {
    label: "Email",
    value: "jvc.camagay@gmail.com",
    detail: "Project inquiries and estimate requests",
    icon: "/logos/gmail.png",
  },
  {
    label: "Phone",
    value: "+63 998 189 7274",
    detail: "WhatsApp • Viber • Telegram",
    icon: "/logos/phone.png",
  },
  {
    label: "Location",
    value: "Taguig City, Philippines",
    detail: "Remote and project-based support",
    icon: "/logos/location.png",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 min-h-screen overflow-hidden text-foreground scroll-mt-0">

      <MotionSection className="mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:py-32">
        
        <h2 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Let&apos;s Build Something Together
        </h2>

        <p className="mt-7 max-w-3xl text-lg leading-9 text-foreground/70">
          Reach out for construction estimating, quantity takeoff, cost
          analysis, and project documentation support.
        </p>

        <div className="mt-14 mx-auto grid max-w-[1200px] gap-9 lg:grid-cols-[510px_660px]">

  <div className="space-y-5">
<MotionCard
  className="
relative
overflow-hidden
rounded-3xl
border
border-[#F97316]/25
bg-gradient-to-br
from-card
to-orange-500/5
p-8
shadow-[0_0_50px_rgba(249,115,22,0.06)]
transition-all
duration-300
hover:border-[#F97316]/50
hover:shadow-[0_0_70px_rgba(249,115,22,0.12)]
"
>
  {/* Background */}
<div className="absolute inset-0 -z-10">

  {/* Main gradient */}
  <div className="
    absolute inset-0
    bg-gradient-to-br
    from-[#F97316]/10
    via-transparent
    to-transparent
  " />

  {/* Top glow */}
  <div className="
    absolute -top-20 -right-20
    h-64 w-64
    rounded-full
    bg-[#F97316]/10
    blur-3xl
  " />

  {/* Bottom glow */}
  <div className="
    absolute -bottom-24 -left-24
    h-72 w-72
    rounded-full
    bg-blue-500/5
    blur-3xl
  " />

</div>
<div
  className="
    absolute inset-0 -z-10 opacity-[0.03]
    bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
    bg-[size:24px_24px]
  "
/>
  
  {/* NAME */}

<div className="flex items-start justify-between">

  <div>
    <h3 className="text-3xl font-bold tracking-wider">
      JOSE VINCE CAMAGAY
    </h3>

    <p className="mt-2 text-[#F97316]">
      Licensed Civil Engineer
    </p>
  </div>

</div>

  <div className="my-2 h-px bg-[#F97316]/20" />

<div className="grid gap-8 lg:grid-cols-[1fr_150px]">

  {/* LEFT SIDE */}
  <div className="space-y-2">

    <div className="flex items-center gap-4">
      <Image
        src="/logos/gmail.png"
        alt="gmail"
        width={22}
        height={22}
      />

      <a
        href="mailto:jvc.camagay@gmail.com"
        className="text-foreground transition hover:text-[#F97316]"
      >
        jvc.camagay@gmail.com
      </a>
    </div>

    <div className="flex items-center gap-4">
      <Image
        src="/logos/whatsapp.png"
        alt="whatsapp"
        width={22}
        height={22}
      />

      <a href="https://wa.me/639981897274" className="text-foreground transition hover:text-[#F97316]">
        +63 998 189 7274
      </a>
    </div>

    <div className="flex items-center gap-4">
      <Image
        src="/logos/viber.svg"
        alt="viber"
        width={22}
        height={22}
      />

      <a className="text-foreground transition hover:text-[#F97316]">
        +63 998 189 7274
      </a>
    </div>

    <div className="flex items-center gap-4">
      <Image
        src="/logos/telegram.png"
        alt="telegram"
        width={22}
        height={22}
      />

      <a className="text-foreground transition hover:text-[#F97316]">
        +63 998 189 7274
      </a>
    </div>

    <div className="pt-2 flex items-center gap-4">
      <Image
        src="/logos/location.png"
        alt="location"
        width={22}
        height={22}
      />

      <span className="text-foreground">
        Taguig City, Philippines
      </span>
    </div>

  </div>

  {/* RIGHT SIDE PHOTO */}
  <div className="flex items-center justify-center">

    <Image
  src="/images/profile.JPG"
  alt="Jose Vince Camagay"
  width={150}
  height={200}
  className="
    h-40
    w-32
    rounded-xl
    border
    border-[#F97316]/30
    object-cover
  "
/>

  </div>

</div>

<div className="my-5 h-px bg-[#F97316]/20" />

  {/* PROFILES */}

  <div className="flex flex-wrap items-center gap-5 text-sm">

  <a
    href="#"
    className="flex items-center gap-2 transition hover:text-[#F97316]"
  >
    <Image
      src="/logos/linkedin.png"
      alt="LinkedIn"
      width={18}
      height={18}
      className="h-5 w-5 object-contain"
    />
    <span className="font-medium">LinkedIn</span>
  </a>

  <span className="text-slate-600">•</span>

  <a
    href="#"
    className="flex items-center gap-2 transition hover:text-[#F97316]"
  >
    <Image
      src="/logos/upwork.png"
      alt="Upwork"
      width={18}
      height={18}
      className="h-5 w-5 object-contain"
    />
    <span className="font-medium">Upwork</span>
  </a>

  <span className="text-slate-600">•</span>

  <a
    href="#"
    className="flex items-center gap-2 transition hover:text-[#F97316]"
  >
    <Image
      src="/logos/olj.png"
      alt="OnlineJobs.ph"
      width={18}
      height={18}
      className="h-5 w-5 object-contain"
    />
    <span className="font-medium">OnlineJobs.ph</span>
  </a>

</div>

</MotionCard>

</div>
<MotionCard
  className="
relative
overflow-hidden
rounded-3xl
border
border-[#F97316]/70
bg-gradient-to-br
from-card
to-orange-500/5
p-8
shadow-[0_0_50px_rgba(249,115,22,0.06)]
"
>
  <p className="text-xs uppercase tracking-[0.25em] text-[#F97316]">
  Consultation Booking
</p>

<h3 className="mt-4 text-3xl font-bold">
  Schedule a Meeting
</h3>

  <p className="mt-3 text-slate-400">
    Book a consultation to discuss your project requirements.
  </p>

  <div className="mt-6 flex-1 rounded-2xl border border-[#F97316]/30">

  <div className="text-center">

    <p className="text-xl font-semibold text-[#F97316]">
      Schedule a Consultation
    </p>

    <p className="mt-3 text-slate-400">
      Calendly integration coming soon.
    </p>

  </div>

</div>
</MotionCard>
        </div>
      </MotionSection>
    </section>
  );
}
