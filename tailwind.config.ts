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
        glow: '0 0 70px -22px rgba(216, 180, 90, 0.55)',
        soft: '0 28px 80px -34px rgba(0, 0, 0, 0.95)',
      },
    },
  },
  plugins: [],
} satisfies Config;
