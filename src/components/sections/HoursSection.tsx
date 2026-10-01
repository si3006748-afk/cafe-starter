import { CalendarOff, Clock, Phone, Utensils } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { SectionHeading } from '../common/SectionHeading'

export function HoursSection() {
  return (
    <section id="hours" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Hours" title="영업시간 · 안내" />
          <div className="mx-auto grid max-w-3xl items-start gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-accent/10 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <Clock size={18} />
                <h3 className="font-serif text-xl text-ink">요일별 영업시간</h3>
              </div>
              <ul className="divide-y divide-accent/10">
                {cafeConfig.hours.map((row) => (
                  <li key={row.day} className="flex items-center justify-between gap-3 py-3 text-sm">
                    <span className="text-ink">{row.label}</span>
                    <span className="text-right text-ink-muted">
                      {row.isClosed ? '휴무' : row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="flex flex-col gap-4">
              <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-accent/10 md:p-7">
                <div className="mb-2 flex items-center gap-2 text-accent">
                  <CalendarOff size={18} />
                  <h3 className="font-serif text-xl text-ink">{cafeConfig.ui.hoursNoteLabel}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink">{cafeConfig.closedNotice}</p>
              </article>
              <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-accent/10 md:p-7">
                <div className="mb-2 flex items-center gap-2 text-accent">
                  <Utensils size={18} />
                  <h3 className="font-serif text-xl text-ink">{cafeConfig.ui.reservationLabel}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink">{cafeConfig.reservationNotice}</p>
              </article>
              <article className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-accent/10 md:p-7">
                <div className="mb-2 flex items-center gap-2 text-accent">
                  <Phone size={18} />
                  <h3 className="font-serif text-xl text-ink">전화번호</h3>
                </div>
                <a
                  href={`tel:${cafeConfig.phone}`}
                  className="text-base text-ink hover:text-accent"
                >
                  {cafeConfig.phone}
                </a>
              </article>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
