/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /**
       * 카페 브랜드 포인트 컬러.
       * 새 고객사에 맞출 때 `accent` 값만 바꾸면 버튼·링크·강조색이 전체에 반영됩니다.
       */
      colors: {
        cream: {
          DEFAULT: '#F7F3EC',
          dark: '#EDE6D9',
        },
        accent: {
          DEFAULT: '#A67C52',
          dark: '#8B6240',
          light: '#C4A07A',
        },
        ink: {
          DEFAULT: '#3D3429',
          muted: '#6B6156',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif KR"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
