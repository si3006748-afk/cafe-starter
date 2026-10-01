import { Coffee, Cookie, CupSoda, Utensils, type LucideIcon } from 'lucide-react'
import type { MenuCategoryIcon } from '../../types'

const menuIcons: Record<MenuCategoryIcon, LucideIcon> = {
  coffee: Coffee,
  cupSoda: CupSoda,
  cookie: Cookie,
  utensils: Utensils,
}

export function getMenuCategoryIcon(icon: MenuCategoryIcon): LucideIcon {
  return menuIcons[icon]
}
