"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import type { ExperienceProject } from "@/constants/experience";
import { cn } from "@/lib/utils";

const TWEEN_FACTOR_BASE = 0.2;

interface ParallaxCarouselProps {
  projects: ExperienceProject[];
}

export function ProjectParallaxCarousel({ projects }: ParallaxCarouselProps) {
  const [autoplay] = React.useState(() =>
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: projects.length > 1,
      duration: 30,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const tweenFactor = React.useRef(0);
  const tweenNodes = React.useRef<HTMLElement[]>([]);

  const setTweenNodes = React.useCallback((api: EmblaCarouselType): void => {
    tweenNodes.current = api.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = React.useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenParallax = React.useCallback(
    (api: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";

      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
        });
      });
    },
    [],
  );

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
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", onInit)
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("select", onSelect);

    onSelect();
  }, [
    emblaApi,
    onInit,
    onSelect,
    setTweenNodes,
    setTweenFactor,
    tweenParallax,
  ]);

  return (
    <div className="w-full flex flex-col gap-2.5">
      <div
        ref={emblaRef}
        className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-muted/20 relative select-none"
      >
        <div className="flex h-full w-full touch-pan-y">
          {projects.map((proj, idx) => {
            const Content = (
              <>
                <div className="embla__parallax h-full w-full overflow-hidden">
                  <div className="embla__parallax__layer relative h-full w-full flex items-center justify-center will-change-transform">
                    {proj.image ? (
                      proj.isPortrait ? (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/20">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-cover blur-2xl opacity-40 scale-125"
                            unoptimized
                          />
                          <div className="relative h-full w-auto aspect-[9/16] py-2 z-10">
                            <Image
                              src={proj.image}
                              alt={proj.title}
                              fill
                              className="object-contain rounded-lg shadow-xl"
                              unoptimized
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-full flex-[0_0_115%] min-w-0 max-w-none flex items-center justify-center">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-muted/40">
                        <span className="font-semibold text-base text-foreground">
                          {proj.title}
                        </span>
                        <p className="text-xs text-muted-foreground max-w-md mt-1">
                          {proj.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Caption Overlay with progressive directional gradient & blur */}
                <div
                  className="absolute inset-x-0 -bottom-[1px] z-20 pt-10 pb-3 px-4 sm:px-5 flex flex-col justify-end pointer-events-none backdrop-blur-md"
                  style={{
                    maskImage:
                      "linear-gradient(to top, black 0%, black 45%, transparent 100%), linear-gradient(to right, black 50%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm tracking-tight drop-shadow-md group-hover:underline">
                      {proj.title}
                    </span>
                    {proj.link && (
                      <span className="text-xs text-zinc-300 font-mono opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    )}
                  </div>
                  <span className="text-zinc-100 text-xs font-medium leading-snug mt-0.5 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-lg">
                    {proj.description}
                  </span>
                </div>
              </>
            );

            return (
              <div
                key={idx}
                className="relative overflow-hidden shrink-0 flex-[0_0_100%] min-w-0 h-full"
              >
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative w-full h-full cursor-pointer"
                  >
                    {Content}
                  </a>
                ) : (
                  <div className="relative w-full h-full">{Content}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator for multiple slides */}
      {projects.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
