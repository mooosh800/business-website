import type { Config } from 'tailwindcss';
import { themeConfig } from './src/config/theme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: themeConfig.colors,
      fontFamily: {
        sans: [...themeConfig.fontFamily.arabic],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(11, 31, 42, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
