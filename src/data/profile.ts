import type { Profile, ProfileDetails } from "@/types/profile"

const details = {
  emailB64: "aGVsbG9AZXhhbXBsZS5jb20=",
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
      href: "https://example.com",
      icon: "website",
      external: true,
    },
    {
      id: "github",
      label: "github",
      href: "https://github.com",
      icon: "github",
      external: true,
    },
    {
      id: "linkedin",
      label: "linkedin",
      href: "https://linkedin.com",
      icon: "linkedin",
      external: true,
    },
    {
      id: "instagram",
      label: "instagram",
      href: "https://instagram.com",
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
      href: "https://twitter.com",
      icon: "twitter",
      external: true,
    },
    {
    {
      id: "spotify",
      label: "spotify",
      href: "https://open.spotify.com",
      icon: "spotify",
      external: true,
    },
    {
      id: "steam",
      label: "steam",
      href: "https://steamcommunity.com",
      icon: "steam",
      external: true,
    },
  ],
} satisfies Profile
