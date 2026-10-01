export type Weekday =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type MapEmbedProvider = 'kakao' | 'naver' | 'none'

export type ImageAsset = {
  /** 실제 이미지 경로. 비워두면 placeholder 박스가 렌더됩니다. */
  src?: string
  alt: string
  placeholderLabel: string
}

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  id: string
  label: string
  url: string
  /** lucide-react 아이콘 이름과 매핑할 키 */
  icon: 'instagram' | 'facebook' | 'youtube' | 'phone' | 'link'
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image?: ImageAsset
}

export type MenuCategoryIcon = 'coffee' | 'cupSoda' | 'cookie' | 'utensils'

export type MenuCategory = {
  id: string
  name: string
  icon: MenuCategoryIcon
  items: MenuItem[]
}

export type BrandMark = {
  /** 실제 로고 이미지 경로. 비워두면 이니셜 또는 아이콘 placeholder가 렌더됩니다. */
  src?: string
  alt: string
  /** 로고 이미지가 없을 때 보여줄 글자. 비워두면 카페 이름 첫 글자를 사용합니다. */
  initial?: string
  shape: 'circle' | 'square'
}

export type BusinessHour = {
  day: Weekday
  label: string
  hours: string
  isClosed?: boolean
}

export type CafeConfig = {
  name: string
  slogan: string
  description: string
  story: string
  phone: string
  email?: string
  address: string
  postalCode?: string
  closedNotice: string
  reservationNotice: string
  copyrightYear: string
  brandMark: BrandMark
  nav: NavItem[]
  hero: {
    image: ImageAsset
    ctaLabel: string
    ctaHref: string
  }
  about: {
    image: ImageAsset
  }
  menu: {
    intro: string
    categories: MenuCategory[]
  }
  gallery: ImageAsset[]
  hours: BusinessHour[]
  maps: {
    /**
     * 위치 섹션에 임베드할 지도.
     * - kakao: 카카오지도 (기본값)
     * - naver: 네이버지도
     * - none: 임베드 없이 주소 + 외부 링크만
     */
    embedProvider: MapEmbedProvider
    /**
     * 카카오지도 iframe src.
     * 카카오맵 > 장소 검색 > 공유 > HTML 소스의 src를 붙여넣으세요.
     * 예: https://map.kakao.com/?q=카페이름
     */
    kakaoEmbedUrl: string
    /**
     * 카카오 지도 JavaScript API 키 (SDK 연동 시 사용).
     * 지금은 사용하지 않습니다. 나중에 동적 마커가 필요하면 여기에 넣으세요.
     */
    kakaoAppKey: string
    /**
     * 네이버지도 iframe src.
     * 네이버 지도 > 장소 > 공유하기에서 임베드 URL을 붙여넣으세요.
     */
    naverEmbedUrl: string
    /**
     * 네이버 클라우드 플랫폼 Maps 클라이언트 ID (SDK 연동 시 사용).
     */
    naverClientId: string
    /** 카카오지도 앱/웹에서 열기 */
    kakaoMapUrl: string
    /** 네이버지도에서 보기 */
    naverMapUrl: string
    /** 카카오 길찾기 URL. 비워두면 주소 검색 링크로 대체됩니다. */
    kakaoDirectionsUrl: string
    /** 네이버 길찾기 URL. 비워두면 주소 검색 링크로 대체됩니다. */
    naverDirectionsUrl: string
  }
  socials: SocialLink[]
  ui: {
    naverMapLinkLabel: string
    kakaoMapLinkLabel: string
    naverDirectionsLabel: string
    kakaoDirectionsLabel: string
    phoneCtaLabel: string
    instagramCtaLabel: string
    hoursNoteLabel: string
    reservationLabel: string
    mapPlaceholder: string
  }
}
