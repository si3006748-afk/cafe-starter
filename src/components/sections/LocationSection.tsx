import { MapPin, Navigation } from 'lucide-react'
import { useState } from 'react'
import { cafeConfig } from '../../config/cafeConfig'
import {
  getEmbedSrc,
  getKakaoDirectionsUrl,
  getKakaoMapUrl,
  getNaverDirectionsUrl,
  getNaverMapUrl,
} from '../../utils/maps'
import { cn } from '../../utils/cn'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { SectionHeading } from '../common/SectionHeading'

type MapTab = 'kakao' | 'naver'

function MapPanel({ provider }: { provider: MapTab }) {
  const src = getEmbedSrc(cafeConfig, provider)
  const label = provider === 'kakao' ? '카카오지도' : '네이버지도'

  if (src) {
    return (
      <iframe
        title={`${label} 위치`}
        src={src}
        className="aspect-[16/10] w-full rounded-b-2xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-b-2xl bg-[#E4D9C8] px-6 text-center">
      <p className="text-sm font-medium text-ink">{label} 자리</p>
      <p className="max-w-md text-sm leading-relaxed text-ink-muted">{cafeConfig.ui.mapPlaceholder}</p>
    </div>
  )
}

export function LocationSection() {
  const defaultTab: MapTab = cafeConfig.maps.embedProvider === 'naver' ? 'naver' : 'kakao'
  const [tab, setTab] = useState<MapTab>(defaultTab)
  const kakaoUrl = getKakaoMapUrl(cafeConfig)
  const naverUrl = getNaverMapUrl(cafeConfig)
  const kakaoDirections = getKakaoDirectionsUrl(cafeConfig)
  const naverDirections = getNaverDirectionsUrl(cafeConfig)

  return (
    <section id="location" className="bg-cream-dark/40 py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Location" title="오시는 길" />
          <div className="overflow-hidden rounded-2xl ring-1 ring-accent/10">
            <div className="flex bg-white/80" role="tablist" aria-label="지도 선택">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'kakao'}
                className={cn(
                  'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                  tab === 'kakao' ? 'bg-accent text-white' : 'text-ink-muted hover:text-accent',
                )}
                onClick={() => setTab('kakao')}
              >
                카카오지도
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'naver'}
                className={cn(
                  'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                  tab === 'naver' ? 'bg-accent text-white' : 'text-ink-muted hover:text-accent',
                )}
                onClick={() => setTab('naver')}
              >
                네이버지도
              </button>
            </div>
            <MapPanel provider={tab} />
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <p className="flex items-start gap-2 text-sm text-ink-muted">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{cafeConfig.address}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={kakaoDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                <Navigation size={14} aria-hidden />
                {cafeConfig.ui.kakaoDirectionsLabel}
              </a>
              <a
                href={naverDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-white/70 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-white"
              >
                <Navigation size={14} aria-hidden />
                {cafeConfig.ui.naverDirectionsLabel}
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={kakaoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-dark"
              >
                {cafeConfig.ui.kakaoMapLinkLabel}
              </a>
              <a
                href={naverUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent transition-colors hover:text-accent-dark"
              >
                {cafeConfig.ui.naverMapLinkLabel}
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
