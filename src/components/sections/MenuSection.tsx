import { cafeConfig } from '../../config/cafeConfig'
import { Container } from '../common/Container'
import { FadeIn } from '../common/FadeIn'
import { SectionHeading } from '../common/SectionHeading'
import { MenuCategoryCard } from '../menu/MenuCategoryCard'

export function MenuSection() {
  return (
    <section id="menu" className="bg-cream-dark/40 py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Menu" title="메뉴" description={cafeConfig.menu.intro} />
          <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cafeConfig.menu.categories.map((category) => (
              <MenuCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
