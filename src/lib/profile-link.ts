import type { ProfileLink } from "@/types/profile"

export function decodeBase64(valueB64: string): string {
  try {
    return globalThis.atob(valueB64)
  } catch {
    throw new Error("Invalid Base64 profile value")
  }
}

export function resolveProfileLinkHref(link: ProfileLink): string {
  if (link.href !== undefined) {
    return link.href
  }

  return `${link.hrefPrefix ?? ""}${decodeBase64(link.hrefB64)}`
}
