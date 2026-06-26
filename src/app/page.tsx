import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import CursorGlow from "@/components/ui/CursorGlow";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
  <CursorGlow />
  <Navbar />

  {/* BACKGROUND LAYER (GRID + GLOWS) */}
  <div className="fixed inset-0 bg-background overflow-hidden">

    {/* GRID */}
    <div aria-hidden="true" className="blueprint-grid" />

    {/* GLOWS */}
    <div className="absolute left-0 top-0 h-[600px] w-[600px] bg-orange-500/10 blur-[180px]" />
    <div className="absolute right-0 bottom-0 h-[600px] w-[600px] bg-blue-500/10 blur-[180px]" />
  </div>

  {/* CONTENT LAYER */}
  <main className="relative z-10">
    <Hero />
    <About />
    <Tools />
    <Projects />
    <Contact />
    <Footer />
  </main>
</>
  );
}