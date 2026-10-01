import { Image as ImageIcon } from 'lucide-react'
import type { ImageAsset } from '../../types'
import { cn } from '../../utils/cn'

type ImagePlaceholderProps = {
  image: ImageAsset
  className?: string
}

/**
 * 이미지가 준비되면 `image.src`만 넣으면 됩니다.
 * src가 없으면 단색 placeholder 박스가 표시됩니다.
 */
export function ImagePlaceholder({ image, className }: ImagePlaceholderProps) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-2 bg-[#E4D9C8] text-ink-muted',
        className,
      )}
    >
      <ImageIcon className="h-7 w-7 opacity-70" aria-hidden />
      <span className="px-4 text-center text-sm tracking-wide">{image.placeholderLabel}</span>
    </div>
  )
}
