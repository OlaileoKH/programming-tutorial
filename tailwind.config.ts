import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography'; // Import as ES module

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Add any other paths you need
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#1e1e1e',
              padding: '0',
              borderRadius: '0.5rem',
              overflow: 'hidden',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    typography, // Use the imported module
    // Add other plugins here as imports
  ],
};

export default config;