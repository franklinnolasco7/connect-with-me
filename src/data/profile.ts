import type { Profile, ProfileDetails } from "@/types/profile"

const details = {
  emailB64: "ZnJhbmtsaW4ubm9sYXNjby5kZXZAZ21haWwuY29t",
  phoneNumberB64: "KzEyMzQ1Njc4OTA=",
} satisfies ProfileDetails

// This is the only file you need to edit to make the page yours.
export const profile = {
  name: "Franklin D. Nolasco",
  handle: "@franklinnolasco7",
  initials: "FDN",
  avatarUrl: "/avatar.webp",
  details,
  links: [
    {
      id: "website",
      label: "website",
      href: "https://franklinnolasco.me/",
      icon: "website",
      external: true,
    },
    {
      id: "github",
      label: "github",
      href: "https://github.com/franklinnolasco7",
      icon: "github",
      external: true,
    },
    {
      id: "linkedin",
      label: "linkedin",
      href: "https://linkedin.com/in/franklin-nolasco-b909b4235",
      icon: "linkedin",
      external: true,
    },
    {
      id: "instagram",
      label: "instagram",
      href: "https://www.instagram.com/frank_dn3/",
      icon: "instagram",
      external: true,
    },
    {
      id: "email",
      label: "email",
      hrefB64: details.emailB64,
      hrefPrefix: "mailto:",
      icon: "gmail",
    },
    {
      id: "twitter",
      label: "twitter",
      href: "https://x.com/franklinN_dev",
      icon: "twitter",
      external: true,
    },
    {
    {
      id: "devto",
      label: "dev.to",
      href: "https://dev.to",
      icon: "devto",
      external: true,
    },
    {
      id: "steam",
      label: "steam",
      href: "https://steamcommunity.com/profiles/76561198954872285/",
      icon: "steam",
      external: true,
    },
  ],
} satisfies Profile
