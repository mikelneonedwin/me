import type { StaticImageData } from "next/image";
import modoolsImg from "@/assets/images/hero-slides/slide4.png";
import lawdamImg from "@/assets/images/hero-slides/slide3-p.jpeg";
import acadevaImg from "@/assets/images/hero-slides/slide2.png";
import appliftWebsiteImg from "@/assets/images/projects/applift-website.png";
import patnaarWebsiteImg from "@/assets/images/projects/applift-patnaar-website.png";
import code30WebsiteImg from "@/assets/images/projects/code3o-website.png";
import vistapayImg from "@/assets/images/projects/vistapay.png";
import tekartImg from "@/assets/images/projects/tekart.png";
import thrivrImg from "@/assets/images/projects/thrivr.png";

import appliftLogo from "@/assets/images/logos/applift.png";
import lawdamLogo from "@/assets/images/logos/lawdam.png";
import acadevaLogo from "@/assets/images/logos/acadeva.png";
import code30Logo from "@/assets/images/logos/30daysofcodewithvickyjay.svg";
import winnerEdwinLogo from "@/app/icon.png";

export interface ExperienceProject {
  title: string;
  description: string;
  image: StaticImageData | string;
  isPortrait?: boolean;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  website?: string;
  logo?: StaticImageData | string;
  description: string;
  projects?: ExperienceProject[];
}

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "applift",
    company: "Applift Labs",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    startDate: "Jul 2025",
    endDate: "Present",
    isCurrent: true,
    website: "https://www.applift.xyz",
    logo: appliftLogo,
    description:
      "At Applift, I work across the web products and a handful of backend services behind them. My work has taken me from building websites and frontend products to spending much more of my time on the backend, including Modools, payment infrastructure, and an internal video processing and delivery tool that has been running steadily for a while now.",
    projects: [
      {
        title: "Modools",
        description:
          "Higher-education LMS featuring AI-assisted course synthesis, automated essay grading, and multi-tenant university auth.",
        image: modoolsImg,
        link: "https://modools.applift.xyz",
      },
      {
        title: "Applift Website",
        description:
          "Official company website and interactive portfolio showcases.",
        image: appliftWebsiteImg,
        link: "https://www.applift.xyz",
      },
      {
        title: "Patnaar",
        description:
          "Smart automated payroll platform for growing businesses, streamlining team onboarding, salary disbursements, and compliance.",
        image: patnaarWebsiteImg,
        link: "https://www.patnaar.com/",
      },
    ],
  },
  {
    id: "lawdam",
    company: "LawdAm",
    role: "Lead Frontend Developer",
    period: "Jan 2025 – Oct 2025",
    startDate: "Jan 2025",
    endDate: "Oct 2025",
    website: "https://about.lawdam.xyz",
    logo: lawdamLogo,
    description:
      "LawdAm is an anonymous social platform built around conversations, direct messages, and real-time interaction. I handled the frontend from the ground up, including the PWA, authentication, API interactions, optimistic updates, local data persistence, and the web experience that eventually grew out of the Capacitor application. A lot of the work was about making the app feel like it was already there instead of making users wait for every little thing.",
    projects: [
      {
        title: "LawdAm Web & PWA",
        description:
          "Client-first reactive anonymous messenger with dynamic identity switching and offline persistence.",
        image: lawdamImg,
        isPortrait: true,
        link: "https://about.lawdam.xyz",
      },
    ],
  },
  {
    id: "acadeva",
    company: "Acadeva",
    role: "Founding Member & Website Developer",
    period: "Apr 2024 – Feb 2026",
    startDate: "Apr 2024",
    endDate: "Feb 2026",
    website: "https://acadeva.xyz",
    logo: acadevaLogo,
    description:
      "Acadeva is still very much alive, and its public website is where most of my code work went. I built and maintained the experience around its academic resources, with a lot of attention going into search, document previews, and making the site work well even when bandwidth isn't exactly generous. I was also involved in the early thinking around how the product could organize academic material and support studying.",
    projects: [
      {
        title: "Acadeva Platform",
        description:
          "Curated academic resource repository with instant in-browser previews and low-bandwidth search.",
        image: acadevaImg,
        link: "https://acadeva.xyz",
      },
    ],
  },
  {
    id: "30daysofcode",
    company: "30DaysOfCodeWithVickyJay",
    role: "Frontend Developer & Community Moderator",
    period: "Jul 2023 – Present",
    startDate: "Jul 2023",
    endDate: "Present",
    isCurrent: true,
    website: "https://code30.vercel.app",
    logo: code30Logo,
    description:
      "I've been around 30DaysOfCodeWithVickyJay for quite a while, wearing both the developer and moderator hats. I built and managed the submission portals used throughout the challenges, reviewed a lot of participant code, and spent plenty of time helping people untangle JavaScript and TypeScript problems. The community side was never the main technical work, but it gave me a front-row seat to how people actually learn and struggle with code.",
    projects: [
      {
        title: "30DaysOfCode Submission Platform",
        description:
          "Participant submission portals (V1 - V4), repo tracking, and automated challenge verification.",
        image: code30WebsiteImg,
        link: "https://code30.vercel.app",
      },
    ],
  },
  {
    id: "early-internships",
    company: "Winner Edwin",
    role: "Frontend Developer",
    period: "Sep 2023 – Nov 2024",
    startDate: "Sep 2023",
    endDate: "Nov 2024",
    logo: winnerEdwinLogo,
    description:
      "Where my commercial development kicked off. Interning directly under VickyJay and taking on contract work, I built and shipped production frontend features across fintech platforms, hospital search systems, fashion events, and merchant dashboards. I was directly responsible for implementing the UI, integrating APIs, and ensuring reliable user flows.",
    projects: [
      {
        title: "Vistapay",
        description:
          "Public web platform and admin dashboard for VTU airtime recharge, bill payments, and user transaction management.",
        image: vistapayImg,
        link: "https://vistapayhq.com/",
      },
      {
        title: "TekArt",
        description:
          "Vendor showcase catalogs, designer portfolio galleries, and ticket reservation interfaces for a fashion runway festival.",
        image: tekartImg,
        link: "https://teknart.vercel.app/",
      },
      {
        title: "Thrivr",
        description:
          "Demo landing page and retail dashboard interface for merchant inventory and SKU workflows.",
        image: thrivrImg,
        link: "https://ayo-test.vercel.app/",
      },
    ],
  },
];
