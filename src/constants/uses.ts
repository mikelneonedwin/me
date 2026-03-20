export type UseItem = {
  name: string;
  description?: string;
  icon?: string;
  url?: string;
};

export type UseCategory = {
  title: string;
  items: UseItem[];
};

export const uses: UseCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "TypeScript",
        description: "Type-safe JavaScript",
        icon: "logos:typescript-icon",
      },
      {
        name: "React",
        description: "UI library of choice",
        icon: "logos:react",
      },
      { name: "Vue", description: "Progressive framework", icon: "logos:vue" },
      {
        name: "Next.js",
        description: "React full-stack framework",
        icon: "logos:nextjs-icon",
      },
      {
        name: "Nuxt",
        description: "Vue full-stack framework",
        icon: "logos:nuxt-icon",
      },
      {
        name: "TanStack Start",
        description: "Full-stack React framework",
        icon: "simple-icons:reactquery",
      },
      {
        name: "TanStack Router",
        description: "Type-safe routing",
        icon: "simple-icons:reactquery",
      },
      {
        name: "TanStack Query",
        description: "Async state management",
        icon: "simple-icons:reactquery",
      },
      {
        name: "React Router",
        description: "Client-side routing",
        icon: "logos:react-router",
      },
      {
        name: "Astro",
        description: "Content-focused framework",
        icon: "simple-icons:astro",
      },
      {
        name: "Vite",
        description: "Lightning-fast bundler",
        icon: "logos:vitejs",
      },
      {
        name: "TailwindCSS",
        description: "Utility-first CSS",
        icon: "logos:tailwindcss-icon",
      },
      {
        name: "Shadcn/ui",
        description: "Reusable components",
        icon: "simple-icons:shadcnui",
      },
      {
        name: "Zustand",
        description: "Lightweight state management",
        icon: "logos:react",
      },
      {
        name: "Zod",
        description: "Schema validation",
        icon: "simple-icons:zod",
      },
      { name: "Ky", description: "Tiny HTTP client", icon: "mdi:api" },
      {
        name: "Tiptap",
        description: "DIY WYSIWYG editor",
        icon: "mdi:format-text",
      },
    ],
  },
  {
    title: "Backend & Runtime",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime",
        icon: "logos:nodejs-icon",
      },
      {
        name: "Bun",
        description: "Fast all-in-one runtime",
        icon: "logos:bun",
      },
      {
        name: "Express",
        description: "Minimal Node framework",
        icon: "simple-icons:express",
      },
      {
        name: "Fastify",
        description: "High-performance framework",
        icon: "simple-icons:fastify",
      },
      {
        name: "NestJS",
        description: "Structured Node.js framework",
        icon: "simple-icons:nestjs",
      },
      {
        name: "Nitro",
        description: "Universal server toolkit",
        icon: "unjs:nitro",
      },
    ],
  },
  {
    title: "Database & ORM",
    items: [
      {
        name: "PostgreSQL",
        description: "Primary relational DB",
        icon: "logos:postgresql",
      },
      {
        name: "SQLite",
        description: "Lightweight embedded DB",
        icon: "vscode-icons:file-type-sqlite",
      },
      {
        name: "Redis",
        description: "In-memory data store",
        icon: "logos:redis",
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alt",
        icon: "logos:supabase-icon",
      },
      {
        name: "Neon",
        description: "Serverless Postgres",
        icon: "logos:neon-icon",
        url: "https://neon.tech",
      },
      {
        name: "Firebase Firestore",
        description: "NoSQL document DB",
        icon: "logos:firebase-icon",
      },
      {
        name: "Firebase RTDB",
        description: "Realtime database",
        icon: "logos:firebase-icon",
      },
      {
        name: "Prisma",
        description: "Type-safe ORM",
        icon: "simple-icons:prisma",
      },
      {
        name: "Drizzle",
        description: "Lightweight TypeScript ORM",
        icon: "simple-icons:drizzle",
      },
      {
        name: "Kysely",
        description: "Type-safe SQL builder",
        icon: "mdi:database",
      },
    ],
  },
  {
    title: "Auth & Services",
    items: [
      {
        name: "Better Auth",
        description: "Modern auth library",
        icon: "mdi:shield-key",
      },
      {
        name: "Firebase Auth",
        description: "Authentication service",
        icon: "logos:firebase-icon",
      },
      {
        name: "Cloudinary",
        description: "Media management",
        icon: "simple-icons:cloudinary",
      },
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
      {
        name: "Vercel",
        description: "Frontend cloud platform",
        icon: "logos:vercel-icon",
        url: "https://vercel.com",
      },
      {
        name: "Netlify",
        description: "Web hosting & serverless",
        icon: "logos:netlify-icon",
      },
      {
        name: "Render",
        description: "Cloud app hosting",
        icon: "simple-icons:render",
      },
      {
        name: "GCP",
        description: "Google Cloud Platform",
        icon: "logos:google-cloud",
      },
      { name: "Git", description: "Version control", icon: "mdi:git" },
      {
        name: "GitHub",
        description: "Code hosting & collaboration",
        icon: "mdi:github",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Code Quality & CI/CD",
    items: [
      {
        name: "ESLint",
        description: "JavaScript linter",
        icon: "logos:eslint",
      },
      {
        name: "Prettier",
        description: "Code formatter",
        icon: "logos:prettier",
      },
      {
        name: "Lefthook",
        description: "Fast Git hooks manager",
        icon: "mdi:hook",
      },
    ],
  },
  {
    title: "Design & Productivity",
    items: [
      {
        name: "Figma",
        description: "Converting designs to code",
        icon: "logos:figma",
        url: "https://figma.com",
      },
      {
        name: "Notion",
        description: "Documentation & notes",
        icon: "simple-icons:notion",
        url: "https://notion.so",
      },
      {
        name: "YouTube",
        description: "Learning & entertainment",
        icon: "logos:youtube-icon",
      },
    ],
  },
];
