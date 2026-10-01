import type { CafeConfig } from '../types'

/**
 * 카페별 콘텐츠 설정.
 * 새 고객사 사이트를 만들 때는 이 파일만 수정하면 됩니다.
 */
export const cafeConfig: CafeConfig = {
  name: '[카페 이름]',
  slogan: '[슬로건을 입력하세요]',
  description: '[카페를 한 문장으로 소개하는 글을 입력하세요]',
  story:
    '[카페 스토리 / 컨셉 소개글을 입력하세요. 공간을 만들게 된 이유, 커피에 대한 철학, 손님이 느끼셨으면 하는 분위기 등을 자유롭게 적어 주세요.]',
  phone: '[전화번호 입력]',
  email: '[이메일 입력]',
  address: '[주소 입력]',
  postalCode: '[우편번호 입력]',
  closedNotice: '[휴무일 입력. 예: 매주 월요일 휴무]',
  reservationNotice: '[예약 안내 입력. 예: 단체석·케이크는 하루 전 전화 예약 부탁드립니다.]',
  copyrightYear: '2026',
  brandMark: {
    alt: '[카페 이름] 로고',
    initial: '',
    shape: 'circle',
  },
  nav: [
    { label: '소개', href: '#about' },
    { label: '메뉴', href: '#menu' },
    { label: '갤러리', href: '#gallery' },
    { label: '위치', href: '#location' },
    { label: '영업시간', href: '#hours' },
    { label: '연락', href: '#contact' },
  ],
  hero: {
    image: {
      alt: '[카페 이름] 대표 공간',
      placeholderLabel: '대표 이미지 자리',
    },
    ctaLabel: '메뉴 보기',
    ctaHref: '#menu',
  },
  about: {
    image: {
      alt: '[카페 이름] 공간 사진',
      placeholderLabel: '소개 사진 자리',
    },
  },
  menu: {
    intro: '[메뉴 소개 문구를 입력하세요. 예: 매일 아침 직접 추출하는 에스프레소와 제철 디저트]',
    categories: [
      {
        id: 'coffee',
        name: '커피',
        icon: 'coffee',
        items: [
          {
            id: 'coffee-1',
            name: '[대표 메뉴 1]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
          {
            id: 'coffee-2',
            name: '[대표 메뉴 2]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
          {
            id: 'coffee-3',
            name: '[시그니처 커피]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
        ],
      },
      {
        id: 'beverage',
        name: '음료',
        icon: 'cupSoda',
        items: [
          {
            id: 'bev-1',
            name: '[음료 메뉴 1]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
          {
            id: 'bev-2',
            name: '[음료 메뉴 2]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
        ],
      },
      {
        id: 'dessert',
        name: '디저트',
        icon: 'cookie',
        items: [
          {
            id: 'dessert-1',
            name: '[디저트 메뉴 1]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
          {
            id: 'dessert-2',
            name: '[디저트 메뉴 2]',
            description: '[메뉴 설명을 입력하세요]',
            price: '[가격]',
          },
        ],
      },
    ],
  },
  gallery: [
    { alt: '갤러리 사진 1', placeholderLabel: '메뉴 사진 자리' },
    { alt: '갤러리 사진 2', placeholderLabel: '공간 사진 자리' },
    { alt: '갤러리 사진 3', placeholderLabel: '메뉴 사진 자리' },
    { alt: '갤러리 사진 4', placeholderLabel: '공간 사진 자리' },
    { alt: '갤러리 사진 5', placeholderLabel: '디저트 사진 자리' },
    { alt: '갤러리 사진 6', placeholderLabel: '카페 사진 자리' },
  ],
  hours: [
    { day: 'monday', label: '월요일', hours: '[영업시간 입력]', isClosed: false },
    { day: 'tuesday', label: '화요일', hours: '[영업시간 입력]' },
    { day: 'wednesday', label: '수요일', hours: '[영업시간 입력]' },
    { day: 'thursday', label: '목요일', hours: '[영업시간 입력]' },
    { day: 'friday', label: '금요일', hours: '[영업시간 입력]' },
    { day: 'saturday', label: '토요일', hours: '[영업시간 입력]' },
    { day: 'sunday', label: '일요일', hours: '[영업시간 입력]' },
  ],
  maps: {
    embedProvider: 'kakao',
    // 카카오맵에서 장소를 검색한 뒤, 공유 > HTML 소스의 iframe src를 붙여넣으세요.
    kakaoEmbedUrl: '',
    // 카카오디벨로퍼스에서 발급한 JavaScript 키. 동적 지도 SDK 연동 시 사용합니다.
    kakaoAppKey: '',
    // 네이버 지도 공유하기에서 임베드 URL을 붙여넣으세요. embedProvider를 'naver'로 바꿀 때 사용합니다.
    naverEmbedUrl: '',
    // 네이버 클라우드 플랫폼 Maps 클라이언트 ID. SDK 연동 시 사용합니다.
    naverClientId: '',
    // 비워두면 주소 검색 링크로 자동 생성됩니다.
    kakaoMapUrl: '',
    naverMapUrl: '',
    kakaoDirectionsUrl: '',
    naverDirectionsUrl: '',
  },
  socials: [
    {
      id: 'instagram',
      label: '인스타그램',
      url: 'https://instagram.com/[계정입력]',
      icon: 'instagram',
    },
    {
      id: 'phone',
      label: '전화하기',
      url: 'tel:[전화번호 입력]',
      icon: 'phone',
    },
  ],
  ui: {
    naverMapLinkLabel: '네이버지도에서 보기',
    kakaoMapLinkLabel: '카카오지도에서 보기',
    naverDirectionsLabel: '네이버 길찾기',
    kakaoDirectionsLabel: '카카오 길찾기',
    phoneCtaLabel: '전화하기',
    instagramCtaLabel: '인스타그램 보러가기',
    hoursNoteLabel: '휴무 안내',
    reservationLabel: '예약 안내',
    mapPlaceholder: '지도가 들어갈 자리입니다. config에서 임베드 URL을 넣어 주세요.',
  },
}
