import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 md:mb-14', align === 'center' ? 'text-center' : 'text-left')}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-ink-muted',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
