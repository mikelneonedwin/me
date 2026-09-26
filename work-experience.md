# Winner Edwin - Comprehensive Work Experience Archive

## 1. Applift Labs / Applift Technologies Limited

- Role: Full Stack Developer
- Period: July 2025 – Present
- Location: Uyo, Akwa Ibom State, Nigeria
- Organization Website: https://www.applift.xyz/
- Summary & Evolution:
  Started as the sole full-stack developer handling end-to-end web properties, frontend client portals, and foundational microservices. Rapidly transitioned into Lead Backend Developer, supervising distributed systems architecture, internal developer tooling, cost-optimized asynchronous compute pipelines, and high-reliability data infrastructure.
- Major Systems & Technical Deliverables:
  1. Modools (Flagship Higher-Education LMS):
     - Built asynchronous PDF-to-Course AI generation engine: Ingests syllabus documents and lecture PDFs, segments and indexes content, interfaces with LLMs, and streams real-time step-by-step generation milestones to frontend clients via WebSockets without blocking user execution threads.
     - Subjective Automated Essay Grading Engine: Implemented semantic evaluation workflows using Vercel AI SDK to grade open-ended student submissions against rubrics.
     - Enterprise Multi-Tenant Authentication Architecture: Led complete migration to @thallesp/nestjs-better-auth with strict tenant context isolation and RBAC.
     - Platform Dashboards & Tooling: Built the Super Admin multi-university orchestration dashboard and manualbook microservice.
  2. Vijeo (Scale-to-Zero Video Processing as a Service - VPaaS):
     - Conceived and built an internal VPaaS orchestrator to eliminate redundant video transcoding pipelines across Applift products.
     - Ephemeral Worker Provisioning: Programmatically spawns Vultr VPS transcoding instances on demand per job and terminates instances immediately upon completion (scale-to-zero compute economics).
     - Automated Adaptive Bitrate (ABR) Transcoding: Transcodes source video into multi-resolution HLS streams (1080p, 720p, 480p, 360p).
     - Telemetry & Storage: Streams real-time percentage progress via Server-Sent Events (SSE) and uploads directly to Bring-Your-Own (BYO) Cloudflare R2 / AWS S3 storage buckets.
  3. Paystack-Router (Centralized Webhook Ingestion Engine):
     - Solved Paystack's architectural limitation of a single webhook URL per merchant account across multiple internal apps, staging environments, and tenant services.
     - Built a high-availability ingestion proxy that validates Paystack HMAC signatures, inspects transaction metadata, and dispatches events idempotently to target services with automated retries.
  4. Web Presence & Client Platforms:
     - Built the official Applift company website (applift.xyz) and marketing landing pages.
     - Engineered public-facing web clients including the Patnaar web portal.

## 2. LawdAm

- Role: Lead Frontend Developer
- Period: January 2025 – October 2025
- Location: Uyo, Nigeria
- Platform Website: https://lawdam.xyz
- Summary & Technical Deliverables:
  - Lead Frontend Architect for an anonymous social messaging and real-time interaction platform.
  - Client-First Reactive State Engine: Built real-time anonymous group chat rooms, direct 1-on-1 private messaging, typing indicators, and live user presence.
  - Dynamic Identity Switching: Designed state management permitting users to toggle between pseudonymous personas across different chat rooms on the fly without tearing down WebSocket connections or dropping message queues.
  - Cross-Platform Mobile Distribution: Built and maintained the Capacitor mobile wrapper pipeline, packaging the responsive web application into iOS and Android builds.

## 3. Acadeva

- Role: Founding Member & Website Developer
- Period: April 2024 – February 2026
- Location: Uyo, Nigeria
- Platform Website: https://acadeva.xyz
- Summary & Technical Deliverables:
  - Co-founded a unified academic resource repository and study platform addressing fragmented university coursework access in Nigeria.
  - Core Web Platform: Designed and developed acadeva.xyz from scratch, focusing on low-bandwidth performance optimization, fast full-text search, and instant in-browser document previews for past questions and lecture materials.
  - Product & Strategy: Contributed to product roadmap, repository categorization schemas, student note indexing, and early AI exam practice prototypes.

## 4. 30DaysOfCodeWithVickyJay (under VickyJay)

- Role: Frontend Developer & Community Moderator
- Period: July 2023 – Present
- Location: Remote
- Platform Website: https://code30.vercel.app
- Founder Profile: https://vickyjay.vercel.app/
- Summary & Technical Deliverables:
  - Career foundation challenge building and shipping 30 distinct software projects in 30 consecutive days.
  - Submission Portal Engineering: Built four successive generations of the central submission portal (V1, V2, V3, V4), automating participant repo submissions, link validation, and challenge tracking for hundreds of developers.
  - Code Review & Moderation: Acted as community moderator, inspecting pull requests, reviewing daily submissions, and helping junior engineers debug JavaScript/TypeScript issues.
  - Experimental Prototypes: Built standalone learning REST tools including jQuiz.

## 5. Early Internships & Subcontracted Client Work (under VickyJay & Thrivr)

- Period: September 2023 – November 2024
- Engagements:
  1. Internship under VickyJay (September 2023 – October 2023):
     - Interned directly under VickyJay (https://vickyjay.vercel.app/), contributing frontend engineering directly to his client codebases:
     - Vistapay: Built VTU (Virtual Top-Up) airtime recharge interfaces, utility bill payment flows, and payment gateway checkout components.
     - TekArt: Developed vendor showcase catalogs, designer portfolio galleries, and ticket reservation interfaces for a fashion runway festival.
  2. Thrivr (October 2024 – November 2024):
     - Built initial public landing page.
     - Interned developing merchant inventory tables, SKU management workflows, and store management views for retail dashboards.
