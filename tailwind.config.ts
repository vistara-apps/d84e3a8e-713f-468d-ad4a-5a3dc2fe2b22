import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(210, 25%, 98%)",
        text: "hsl(210, 25%, 15%)",
        muted: "hsl(210, 25%, 50%)",
        accent: "hsl(140, 70%, 45%)",
        primary: "hsl(210, 70%, 50%)",
        surface: "hsl(210, 25%, 100%)",
        dark: {
          bg: "hsl(210, 25%, 8%)",
          text: "hsl(210, 25%, 90%)",
          surface: "hsl(210, 25%, 12%)",
          muted: "hsl(210, 25%, 60%)",
        }
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      spacing: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 3px 6px hsla(0, 0%, 0%, 0.1), 0 2px 4px hsla(0, 0%, 0%, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'bounce-subtle': 'bounceSubtle 150ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
