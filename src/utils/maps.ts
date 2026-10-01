import type { CafeConfig, MapEmbedProvider } from '../types'

export function getKakaoMapUrl(config: CafeConfig): string {
  if (config.maps.kakaoMapUrl) return config.maps.kakaoMapUrl
  return `https://map.kakao.com/?q=${encodeURIComponent(config.address)}`
}

export function getNaverMapUrl(config: CafeConfig): string {
  if (config.maps.naverMapUrl) return config.maps.naverMapUrl
  return `https://map.naver.com/p/search/${encodeURIComponent(config.address)}`
}

export function getKakaoDirectionsUrl(config: CafeConfig): string {
  if (config.maps.kakaoDirectionsUrl) return config.maps.kakaoDirectionsUrl
  return getKakaoMapUrl(config)
}

export function getNaverDirectionsUrl(config: CafeConfig): string {
  if (config.maps.naverDirectionsUrl) return config.maps.naverDirectionsUrl
  return getNaverMapUrl(config)
}

export function getEmbedSrc(
  config: CafeConfig,
  provider: Exclude<MapEmbedProvider, 'none'>,
): string | null {
  if (provider === 'kakao') return config.maps.kakaoEmbedUrl || null
  return config.maps.naverEmbedUrl || null
}
