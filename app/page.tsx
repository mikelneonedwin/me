import { Navbar } from "@/components/navbar";
import { Typewriter } from "@/components/typewriter";
import { HeroBio } from "@/components/hero-bio";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { TechMarquee } from "@/components/tech-marquee";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SpeedWindAnimation } from "@/components/speed-wind-animation";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Full-Site Ambient Speed Wind Background (Dark Mode only) */}
      <div className="hidden dark:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <SpeedWindAnimation
          isBackground
          className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-35"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col space-y-10 sm:space-y-14">
          {/* Top Typewriter Bar */}
          <section>
            <div className="inline-flex items-center rounded-lg border border-border bg-muted/40 px-3.5 py-2">
              <Typewriter />
            </div>
          </section>

          {/* Bio & Intro */}
          <HeroBio />

          {/* Carousel Showcase */}
          <section className="w-full pt-2">
            <HeroSlideshow />
          </section>

          {/* Core Technologies Marquee */}
          <section className="w-full pt-4 sm:pt-6">
            <TechMarquee />
          </section>

          {/* Experience Section */}
          <section className="w-full pt-4 sm:pt-6">
            <ExperienceSection />
          </section>

          {/* Contact Section */}
          <section className="w-full pt-4 sm:pt-6">
            <ContactSection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
