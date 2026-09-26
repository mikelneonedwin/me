export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description: string;
  linkText?: string;
  linkHref?: string;
  featuredProjects?: {
    name: string;
    description: string;
  }[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "applift",
    company: "Applift Labs",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    startDate: "Jul 2025",
    endDate: "Present",
    isCurrent: true,
    description:
      "At Applift, I work across the web products and a handful of backend services behind them. My work has taken me from building websites and frontend products to spending much more of my time on the backend, including Modools, payment infrastructure, and an internal video processing and delivery tool that has been running steadily for a while now.",
    linkText: "View full Applift experience",
    linkHref: "/experience#applift",
    featuredProjects: [
      {
        name: "Modools",
        description:
          "Higher-education LMS with AI course generation pipelines.",
      },
      {
        name: "Vijeo",
        description:
          "Scale-to-zero video transcoding and delivery infrastructure.",
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
    description:
      "LawdAm is an anonymous social platform built around conversations, direct messages, and real-time interaction. I handled the frontend from the ground up, including the PWA, authentication, API interactions, optimistic updates, local data persistence, and the web experience that eventually grew out of the Capacitor application. A lot of the work was about making the app feel like it was already there instead of making users wait for every little thing.",
  },
  {
    id: "acadeva",
    company: "Acadeva",
    role: "Founding Member & Website Developer",
    period: "Apr 2024 – Feb 2026",
    startDate: "Apr 2024",
    endDate: "Feb 2026",
    description:
      "Acadeva is still very much alive, and its public website is where most of my code work went. I built and maintained the experience around its academic resources, with a lot of attention going into search, document previews, and making the site work well even when bandwidth isn't exactly generous. I was also involved in the early thinking around how the product could organize academic material and support studying.",
  },
  {
    id: "30daysofcode",
    company: "30DaysOfCodeWithVickyJay",
    role: "Frontend Developer & Community Moderator",
    period: "Jul 2023 – Present",
    startDate: "Jul 2023",
    endDate: "Present",
    isCurrent: true,
    description:
      "I've been around 30DaysOfCodeWithVickyJay for quite a while, wearing both the developer and moderator hats. I built and managed the submission portals used throughout the challenges, reviewed a lot of participant code, and spent plenty of time helping people untangle JavaScript and TypeScript problems. The community side was never the main technical work, but it gave me a front-row seat to how people actually learn and struggle with code.",
  },
  {
    id: "early-internships",
    company: "Early Internships & Client Work",
    role: "Frontend Developer",
    period: "Sep 2023 – Nov 2024",
    startDate: "Sep 2023",
    endDate: "Nov 2024",
    description:
      "This was the beginning of my commercial work, and it was a pretty varied one. I worked on payment and utility flows, vendor and designer catalogs, ticket reservations, inventory management, and store administration. Nothing particularly glamorous, just a lot of different software problems to solve and a lot of learning that came from solving them for real.",
  },
];
