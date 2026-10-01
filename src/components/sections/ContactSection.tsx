import { cafeConfig } from '../../config/cafeConfig'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { SectionHeading } from '../common/SectionHeading'
import { SocialIcon } from '../common/SocialIcon'

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream-dark/40 py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Visit"
            title="찾아오시는 길, 편하게 연락해 주세요"
            description="예약·단체석·케이크 주문이 필요하시면 전화 또는 SNS로 문의해 주세요."
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cafeConfig.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target={social.icon === 'phone' ? undefined : '_blank'}
                rel={social.icon === 'phone' ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
