import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Winner Edwin — Software Engineer",
    template: "%s | Winner Edwin",
  },
  description:
    "Software engineer in Uyo, Nigeria. Building fast, lightweight software, distributed backend systems, and developer tools.",
  metadataBase: new URL("https://mikelneonedwin.vercel.app"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Winner Edwin", url: "https://mikelneonedwin.vercel.app" }],
  creator: "Winner Edwin",
  publisher: "Winner Edwin",
  keywords: [
    "Winner Edwin",
    "Winner Edwin software engineer",
    "Winner Edwin developer",
    "mikelneonedwin",
    "software engineer Uyo Nigeria",
    "full stack developer Nigeria",
    "backend engineer",
    "distributed systems",
    "Next.js developer",
    "TypeScript developer",
    "Applift Labs",
    "Modools",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Winner Edwin — Software Engineer",
    description:
      "Software engineer in Uyo, Nigeria. Make it work, make it right, then make it fast.",
    url: "https://mikelneonedwin.vercel.app",
    siteName: "Winner Edwin",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winner Edwin — Software Engineer",
    creator: "@mikelneonedwin",
    site: "@mikelneonedwin",
    description:
      "Software engineer in Uyo, Nigeria. Building fast, resilient software and developer tools.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://mikelneonedwin.vercel.app/#webpage",
      url: "https://mikelneonedwin.vercel.app",
      name: "Winner Edwin — Software Engineer",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://mikelneonedwin.vercel.app/#website",
        url: "https://mikelneonedwin.vercel.app",
        name: "Winner Edwin",
        description:
          "Personal portfolio and engineering journey of Winner Edwin, a software engineer in Uyo, Nigeria.",
      },
      about: { "@id": "https://mikelneonedwin.vercel.app/#person" },
      mainEntity: { "@id": "https://mikelneonedwin.vercel.app/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://mikelneonedwin.vercel.app/#person",
      name: "Winner Edwin",
      givenName: "Winner",
      familyName: "Edwin",
      alternateName: ["mikelneonedwin", "Edwin Winner"],
      jobTitle: "Software Engineer",
      description:
        "Software engineer based in Uyo, Nigeria, specializing in distributed systems, backend engineering, and high-performance web applications.",
      url: "https://mikelneonedwin.vercel.app",
      image: "https://avatars.githubusercontent.com/u/113316417?v=4",
      sameAs: [
        "https://github.com/mikelneonedwin",
        "https://x.com/mikelneonedwin",
        "https://www.linkedin.com/in/mikelneonedwin",
        "https://www.instagram.com/mikelneonedwin",
        "https://www.threads.com/@mikelneonedwin",
        "https://www.tiktok.com/@mikelneonedwin",
        "https://www.youtube.com/@mikelneonedwin",
        "https://www.facebook.com/mikelneonedwin",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Uyo",
        addressRegion: "Akwa Ibom State",
        addressCountry: "Nigeria",
      },
      knowsAbout: [
        "Software Engineering",
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "Express",
        "Distributed Systems",
        "PostgreSQL",
        "Database Architecture",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Applift Labs",
        url: "https://www.applift.xyz",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
