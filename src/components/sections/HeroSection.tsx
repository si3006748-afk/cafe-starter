import { cafeConfig } from '../../config/cafeConfig'
import { ImagePlaceholder } from '../common/ImagePlaceholder'

export function HeroSection() {
  const { hero, name, slogan, description } = cafeConfig

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-[4.5rem]">
      <div className="grid min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)] md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Cafe</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="mt-5 font-serif text-xl text-accent-dark md:text-2xl">{slogan}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">{description}</p>
          <div className="mt-8">
            <a
              href={hero.ctaHref}
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              {hero.ctaLabel}
            </a>
          </div>
        </div>
        <div className="min-h-[280px] md:min-h-full">
          <ImagePlaceholder image={hero.image} />
        </div>
      </div>
    </section>
  )
}
