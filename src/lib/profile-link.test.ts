import { describe, expect, it } from "vitest"

import { profileIcons } from "@/config/icons"
import { profile } from "@/data/profile"
import { decodeBase64, resolveProfileLinkHref } from "@/lib/profile-link"
import type { ProfileLink } from "@/types/profile"

describe("profile link destinations", () => {
  it("returns a direct URL unchanged", () => {
    // Arrange
    const link = {
      id: "website",
      label: "website",
      href: "https://example.com",
      icon: "globe",
      external: true,
    } satisfies ProfileLink

    // Act
    const href = resolveProfileLinkHref(link)

    // Assert
    expect(href).toBe("https://example.com")
  })

  it("decodes a Base64 value and applies its protocol prefix", () => {
    // Arrange
    const link = {
      id: "email",
      label: "email",
      hrefB64: "aGVsbG9AZXhhbXBsZS5jb20=",
      hrefPrefix: "mailto:",
      icon: "mail",
    } satisfies ProfileLink

    // Act
    const href = resolveProfileLinkHref(link)

    // Assert
    expect(href).toBe("mailto:hello@example.com")
  })

  it("rejects malformed Base64 without including the value in the error", () => {
    // Arrange
    const malformedValue = "not-base64!"

    // Act
    const decode = () => decodeBase64(malformedValue)

    // Assert
    expect(decode).toThrowError("Invalid Base64 profile value")
    expect(decode).not.toThrowError(malformedValue)
  })
})

describe("profile configuration", () => {
  it("uses unique IDs and registered icon names for every link", () => {
    // Arrange
    const registeredIcons = new Set(Object.keys(profileIcons))

    // Act
    const linkIds = profile.links.map((link) => link.id)
    const unknownIcons = profile.links
      .map((link) => link.icon)
      .filter((icon) => !registeredIcons.has(icon))

    // Assert
    expect(new Set(linkIds).size).toBe(linkIds.length)
    expect(unknownIcons).toEqual([])
  })

  it("resolves every configured destination", () => {
    // Arrange
    const expectedLinkCount = profile.links.length

    // Act
    const destinations = profile.links.map(resolveProfileLinkHref)

    // Assert
    expect(destinations).toHaveLength(expectedLinkCount)
    expect(destinations.every(Boolean)).toBe(true)
  })
})
