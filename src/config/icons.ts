import { Phone, type LucideIcon } from "lucide-react"

import {
  DevToIcon,
  FacebookIcon,
  GitHubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  SteamIcon,
  TwitterIcon,
  WebsiteIcon,
} from "@/components/icons/brand-icons"

/** Add a Lucide import and map entry here to make an icon available to links. */
export const profileIcons = {
  devto: DevToIcon,
  facebook: FacebookIcon,
  steam: SteamIcon,
  github: GitHubIcon,
  gmail: GmailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  phone: Phone,
  twitter: TwitterIcon,
  website: WebsiteIcon,
} satisfies Record<string, LucideIcon>

export type ProfileIconName = keyof typeof profileIcons
