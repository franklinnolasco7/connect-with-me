import type { Profile, ProfileDetails } from "@/types/profile"

const details = {
  emailB64: "aGVsbG9AZXhhbXBsZS5jb20=",
  phoneNumberB64: "KzEyMzQ1Njc4OTA=",
} satisfies ProfileDetails

// This is the only file you need to edit to make the page yours.
export const profile = {
  name: "Frank",
  handle: "@yourhandle",
  initials: "FR",
  avatarUrl: "",
  details,
  links: [
    {
      id: "website",
      label: "website",
      href: "https://example.com",
      icon: "globe",
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
      icon: "mail",
    },
    {
      id: "book-a-call",
      label: "book a call",
      href: "https://cal.com",
      icon: "calendar",
      external: true,
    },
    {
      id: "writing",
      label: "writing",
      href: "https://medium.com",
      icon: "notebook",
      external: true,
    },
    {
      id: "spotify",
      label: "spotify",
      href: "https://open.spotify.com",
      icon: "music",
      external: true,
    },
    {
      id: "resume",
      label: "résumé",
      href: "https://example.com/resume",
      icon: "file",
      external: true,
    },
  ],
} satisfies Profile
