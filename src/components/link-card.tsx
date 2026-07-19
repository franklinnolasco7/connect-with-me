import { Card, CardContent } from "@/components/ui/card"
import { profileIcons } from "@/config/icons"
import { resolveProfileLinkHref } from "@/lib/profile-link"
import type { ProfileLink } from "@/types/profile"

type LinkCardProps = {
  link: ProfileLink
}

export function LinkCard({ link }: LinkCardProps) {
  const Icon = profileIcons[link.icon]
  const href = resolveProfileLinkHref(link)

  return (
    <li className="min-w-0">
      <a
        className="group block rounded-xl outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring focus-visible:outline-solid"
        href={href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
      >
        <Card className="h-[108px] gap-0 rounded-xl border-border bg-card py-0 transition-colors duration-150 group-hover:border-[#343434] group-hover:bg-[#0d0d0d] group-focus-visible:border-[#343434] group-active:bg-[#111111] motion-reduce:transition-none">
          <CardContent className="flex h-full min-w-0 flex-col items-center justify-center gap-[14px] px-4">
            <Icon
              className="size-7 text-muted-foreground transition-colors duration-150 group-hover:text-[#a7a7a7] group-focus-visible:text-[#a7a7a7] motion-reduce:transition-none"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            <span
              className="max-w-full truncate text-[13px] leading-[18px] font-normal text-muted-foreground transition-colors duration-150 group-hover:text-[#a7a7a7] group-focus-visible:text-[#a7a7a7] motion-reduce:transition-none"
              title={link.label}
            >
              {link.label}
            </span>
          </CardContent>
        </Card>
        {link.external ? (
          <span className="sr-only"> (opens in a new tab)</span>
        ) : null}
      </a>
    </li>
  )
}
