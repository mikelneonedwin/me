import { Github, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import {
  EMAIL_URL,
  GITHUB_URL,
  PHONE_URL,
  X_URL,
} from "./globals";

export const socials = [
  {
    icon: Github,
    href: GITHUB_URL,
    name: "GitHub",
  },
  {
    icon: FaXTwitter,
    href: X_URL,
    name: "X (formerly Twitter)",
  },
  {
    icon: Mail,
    href: EMAIL_URL,
    name: "Email",
  },
  {
    icon: Phone,
    href: PHONE_URL,
    name: "Phone",
  },
];
