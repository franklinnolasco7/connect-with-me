import { Phone, type LucideIcon } from "lucide-react"

import {
  FacebookIcon,
  GitHubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  SteamIcon,
  TwitterIcon,
  WebsiteIcon,
} from "@/components/icons/brand-icons"

/** Add a Lucide import and map entry here to make an icon available to links. */
export const profileIcons = {
  facebook: FacebookIcon,
  steam: SteamIcon,
  github: GitHubIcon,
  gmail: GmailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  spotify: SpotifyIcon,
  phone: Phone,
  twitter: TwitterIcon,
  website: WebsiteIcon,
} satisfies Record<string, LucideIcon>

export type ProfileIconName = keyof typeof profileIcons
