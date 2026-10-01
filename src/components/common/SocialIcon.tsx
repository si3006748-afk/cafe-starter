import {
  Camera,
  Globe,
  Link as LinkIcon,
  Phone,
  Play,
  type LucideIcon,
} from 'lucide-react'
import type { SocialLink } from '../../types'

/**
 * lucide-react는 브랜드 아이콘(Instagram 등)을 더 이상 제공하지 않아
 * 비슷한 범용 아이콘으로 매핑합니다.
 */
const iconMap: Record<SocialLink['icon'], LucideIcon> = {
  instagram: Camera,
  facebook: Globe,
  youtube: Play,
  phone: Phone,
  link: LinkIcon,
}

type SocialIconProps = {
  name: SocialLink['icon']
  className?: string
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = iconMap[name]
  return <Icon className={className} aria-hidden />
}
