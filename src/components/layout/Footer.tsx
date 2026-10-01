import { cafeConfig } from '../../config/cafeConfig'

export function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-cream-dark/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-ink-muted md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-serif text-lg text-ink">{cafeConfig.name}</p>
          <p className="mt-2">{cafeConfig.address}</p>
          <p className="mt-1">{cafeConfig.phone}</p>
        </div>
        <p>
          © {cafeConfig.copyrightYear} {cafeConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
