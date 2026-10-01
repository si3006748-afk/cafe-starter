import { cafeConfig } from '../../config/cafeConfig'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { ImagePlaceholder } from '../common/ImagePlaceholder'
import { SectionHeading } from '../common/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <Container>
        <FadeIn>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl md:order-2">
              <ImagePlaceholder image={cafeConfig.about.image} />
            </div>
            <div className="md:order-1">
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="카페 소개"
                description={cafeConfig.story}
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
