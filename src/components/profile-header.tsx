import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { profile } from "@/data/profile"

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <Avatar
        className="size-24 border border-border bg-muted"
        aria-hidden="true"
      >
        {profile.avatarUrl ? (
          <AvatarImage src={profile.avatarUrl} alt="" />
        ) : null}
        <AvatarFallback className="bg-muted text-xl font-semibold tracking-[-0.03em] text-foreground">
          {profile.initials}
        </AvatarFallback>
      </Avatar>

      <h1 className="mt-6 text-[20px] leading-6 font-semibold tracking-[-0.025em] text-foreground">
        {profile.name}
      </h1>
      <p className="mt-2 text-[14px] leading-5 text-muted-foreground">
        {profile.handle}
      </p>
    </header>
  )
}
