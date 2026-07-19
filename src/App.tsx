import { LinkCard } from "@/components/link-card"
import { ProfileHeader } from "@/components/profile-header"
import { profile } from "@/data/profile"

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <main className="mx-auto min-h-svh w-full max-w-[576px] px-4 pt-12 pb-12 sm:pt-16">
        <ProfileHeader />

        <section className="mt-10" aria-labelledby="links-heading">
          <h2 id="links-heading" className="sr-only">
            Find me online
          </h2>
          <nav aria-label="Profile links">
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {profile.links.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default App
