import type { MenuCategory } from '../../types'
import { getMenuCategoryIcon } from '../../utils/menuIcons'
import { MenuItemRow } from './MenuItemRow'

type MenuCategoryCardProps = {
  category: MenuCategory
}

export function MenuCategoryCard({ category }: MenuCategoryCardProps) {
  const Icon = getMenuCategoryIcon(category.icon)

  return (
    <article className="h-auto rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-accent/10 md:p-8">
      <h3 className="flex items-center gap-2 font-serif text-2xl text-accent">
        <Icon className="h-5 w-5 shrink-0" aria-hidden />
        {category.name}
      </h3>
      <ul className="mt-2 divide-y divide-accent/10">
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </article>
  )
}
