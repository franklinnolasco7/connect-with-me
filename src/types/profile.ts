import type { ProfileIconName } from "@/config/icons"

type ProfileLinkBase = {
  id: string
  label: string
  icon: ProfileIconName
  external?: boolean
}

type DirectProfileLink = ProfileLinkBase & {
  href: string
  hrefB64?: never
  hrefPrefix?: never
}

type EncodedProfileLink = ProfileLinkBase & {
  href?: never
  /** Base64 obfuscation for public contact data; this is not encryption. */
  hrefB64: string
  /** Protocol added after decoding, for example `mailto:` or `tel:`. */
  hrefPrefix?: string
}

export type ProfileLink = DirectProfileLink | EncodedProfileLink

export type ProfileDetails = {
  /** Public email address encoded as Base64. */
  emailB64: string
  /** Optional public phone number encoded as Base64. */
  phoneNumberB64: string
}

export type Profile = {
  name: string
  handle: string
  initials: string
  avatarUrl: string
  details: ProfileDetails
  links: ProfileLink[]
}
