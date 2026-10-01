import { cafeConfig } from '../../config/cafeConfig'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { ImagePlaceholder } from '../common/ImagePlaceholder'
import { SectionHeading } from '../common/SectionHeading'

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Gallery" title="갤러리" description="공간과 메뉴의 분위기를 담은 사진이 들어갈 자리입니다." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {cafeConfig.gallery.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImagePlaceholder image={image} />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
