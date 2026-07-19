import {
  CalendarDays,
  FileText,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  NotebookText,
  Phone,
  type LucideIcon,
} from "lucide-react"

/** Add a Lucide import and map entry here to make an icon available to links. */
export const profileIcons = {
  calendar: CalendarDays,
  file: FileText,
  github: Github,
  globe: Globe2,
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  music: Music2,
  notebook: NotebookText,
  phone: Phone,
} satisfies Record<string, LucideIcon>

export type ProfileIconName = keyof typeof profileIcons
