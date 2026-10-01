import type { MenuItem } from '../../types'

type MenuItemRowProps = {
  item: MenuItem
}

export function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <li className="py-4">
      <div className="flex items-baseline gap-2">
        <p className="shrink-0 font-medium text-ink">{item.name}</p>
        <span className="min-w-6 flex-1 border-b border-dotted border-accent/40" aria-hidden />
        <p className="shrink-0 font-serif text-ink">{item.price}</p>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
    </li>
  )
}
