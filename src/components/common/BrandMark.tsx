import { Coffee } from 'lucide-react'
import { cafeConfig } from '../../config/cafeConfig'
import { cn } from '../../utils/cn'

export function BrandMark({ className }: { className?: string }) {
  const { brandMark, name } = cafeConfig
  const initial = (brandMark.initial || name.replace(/[\[\]]/g, '').trim().charAt(0) || 'C').toUpperCase()
  const shapeClass = brandMark.shape === 'square' ? 'rounded-md' : 'rounded-full'

  if (brandMark.src) {
    return (
      <img
        src={brandMark.src}
        alt={brandMark.alt}
        className={cn('h-8 w-8 object-cover md:h-9 md:w-9', shapeClass, className)}
      />
    )
  }

  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-white md:h-9 md:w-9',
        shapeClass,
        className,
      )}
    >
      {brandMark.initial ? (
        <span className="font-serif text-sm leading-none md:text-base">{initial}</span>
      ) : (
        <Coffee className="h-4 w-4" />
      )}
    </span>
  )
}
