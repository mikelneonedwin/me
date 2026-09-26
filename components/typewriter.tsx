"use client";

import * as React from "react";

const PHRASES = [
  "I build web applications.",
  "I build backend systems.",
  "I build developer tools.",
  "I build internal tools.",
  "I build products from the ground up.",
];

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullPhrase = PHRASES[phraseIndex];

    const typeSpeed = isDeleting ? 30 : 65;
    const pauseBeforeDelete = 1800;
    const pauseBeforeNext = 350;

    if (!isDeleting && currentText === fullPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, pauseBeforeNext);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return fullPhrase.substring(0, prev.length - 1);
        } else {
          return fullPhrase.substring(0, prev.length + 1);
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <div className="font-mono text-sm sm:text-base md:text-lg text-primary tracking-wide flex items-center min-h-[1.75rem]">
      <span className="text-muted-foreground mr-2 select-none">&gt;</span>
      <span>{currentText}</span>
      <span className="inline-block w-2 h-4 sm:h-5 bg-primary ml-1 animate-pulse" />
    </div>
  );
}
