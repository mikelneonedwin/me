"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import slide1 from "@/assets/images/hero-slides/slide1.jpg";
import slide2 from "@/assets/images/hero-slides/slide2.png";
import slide3 from "@/assets/images/hero-slides/slide3-p.jpeg";
import slide4 from "@/assets/images/hero-slides/slide4.png";
import slide5 from "@/assets/images/hero-slides/slide5.jpg";

interface SlideItem {
  image: StaticImageData;
  alt: string;
  isPortrait?: boolean;
  title?: string;
  subtitle?: string;
}

const SLIDES: SlideItem[] = [
  {
    image: slide1,
    alt: "Winner Edwin — Software Engineer",
    subtitle: "Have you seen a JS dev today?",
  },
  {
    image: slide2,
    alt: "Acadeva platform showcase — academic resources and study tools built by Winner Edwin",
    title: "Acadeva",
    subtitle: "Coursework, materials & exams",
  },
  {
    image: slide3,
    alt: "LawdAm mobile interface — real-time anonymous interaction app built by Winner Edwin",
    isPortrait: true,
    title: "LawdAm",
    subtitle: "Anonymous social interaction",
  },
  {
    image: slide4,
    alt: "Modools LMS platform — learning management system built by Winner Edwin",
    title: "Modools",
    subtitle: "Learning management for universities",
  },
  {
    image: slide5,
    alt: "Winner Edwin working on software engineering projects",
    subtitle: "Less complexity. More software.",
  },
];

export function HeroSlideshow() {
  const [autoplay] = React.useState(() =>
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 25,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = React.useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Viewport */}
      <div
        ref={emblaRef}
        className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-sm backdrop-blur-xs relative select-none"
      >
        <div className="flex h-full w-full touch-pan-y">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative overflow-hidden shrink-0 flex-[0_0_100%] min-w-0 h-full flex items-center justify-center"
            >
              {slide.isPortrait ? (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-950/20">
                  {/* Blurred background backdrop */}
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover blur-2xl opacity-35 scale-125"
                    priority
                    unoptimized
                  />
                  {/* Contained portrait image */}
                  <div className="relative h-full w-auto aspect-[9/16] max-h-full py-2.5 z-10">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-contain rounded-xl shadow-2xl"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              )}

              {/* Slide Caption / Footer with progressive directional gradient & blur */}
              {(slide.title || slide.subtitle) && (
                <div
                  className={cn(
                    "absolute inset-x-0 -bottom-[1px] z-20 pb-3 sm:pb-4 px-4 sm:px-6 flex flex-col justify-end pointer-events-none",
                    slide.title
                      ? "pt-12 sm:pt-16 backdrop-blur-md"
                      : "pt-14 sm:pt-28 backdrop-blur-lg",
                  )}
                  style={{
                    maskImage: slide.title
                      ? "linear-gradient(to top, black 0%, black 45%, transparent 100%), linear-gradient(to right, black 50%, transparent 100%)"
                      : "linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
                    WebkitMaskImage: slide.title
                      ? "linear-gradient(to top, black 0%, black 45%, transparent 100%)"
                      : "linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
                    background: slide.title
                      ? "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)"
                      : "linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.08) 75%, transparent 100%), linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)",
                  }}
                >
                  {slide.title && (
                    <span className="font-bold text-white text-sm sm:text-base leading-tight tracking-tight drop-shadow-md">
                      {slide.title}
                    </span>
                  )}
                  {slide.subtitle && (
                    <span className="text-zinc-100 text-xs sm:text-sm font-medium leading-snug mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-md">
                      {slide.subtitle}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex items-center gap-1.5 mt-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
