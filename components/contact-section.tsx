"use client";

import * as React from "react";
import { Mail, Phone } from "lucide-react";
import {
  GitHubIcon,
  XIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/icons";

export function ContactSection() {
  const primaryContacts = [
    {
      id: "email",
      label: "winneredwin2667@gmail.com",
      href: "mailto:winneredwin2667@gmail.com",
      icon: Mail,
      isComponentIcon: false,
    },
    {
      id: "github",
      label: "mikelneonedwin",
      href: "https://github.com/mikelneonedwin",
      icon: GitHubIcon,
      isComponentIcon: true,
    },
    {
      id: "x",
      label: "mikelneonedwin",
      href: "https://x.com/mikelneonedwin",
      icon: XIcon,
      isComponentIcon: true,
    },
  ];

  const minorContacts = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mikelneonedwin",
      icon: LinkedInIcon,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://wa.me/2348076488738",
      icon: WhatsAppIcon,
    },
    {
      id: "phone",
      name: "Phone",
      href: "tel:+2348076488738",
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="w-full pt-8 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Side: Headline, copy, and primary action */}
        <div className="md:col-span-6 flex flex-col space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-foreground">
            Let&apos;s Talk.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            Available for software engineering roles, distributed systems
            contracts, full-stack application builds, and technical
            consultations.
          </p>
          <div className="pt-2">
            <a
              href="mailto:winneredwin2667@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-xs"
            >
              Email me
            </a>
          </div>
        </div>

        {/* Right Side: Primary accounts (matching reference layout) & minor accounts below */}
        <div className="md:col-span-6 flex flex-col w-full">
          {/* Stacked primary contacts with horizontal borders (no top or bottom borders) */}
          <div className="divide-y divide-border/60">
            {primaryContacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.id !== "email" ? "_blank" : undefined}
                  rel={
                    contact.id !== "email" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-3.5 py-3 sm:py-3.5 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="flex items-center justify-center size-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="font-mono text-sm sm:text-base select-all text-muted-foreground group-hover:text-primary transition-colors">
                    {contact.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Minor accounts in a 3-column grid spanning full width as outline buttons */}
          <div className="pt-6 sm:pt-7 grid grid-cols-3 gap-3 w-full">
            {minorContacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-border/70 bg-muted/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-muted/40 transition-colors group text-sm font-medium"
                >
                  <Icon className="size-4.5 group-hover:text-primary transition-colors shrink-0" />
                  <span className="font-mono text-xs sm:text-sm group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
