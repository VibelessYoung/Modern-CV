module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 12%, 15%)",
        input: "hsl(220, 12%, 15%)",
        ring: "hsl(220, 95%, 62%)",
        background: "hsl(220, 15%, 10%)",
        foreground: "hsl(0, 0%, 95%)",
        primary: {
          DEFAULT: "hsl(220, 95%, 62%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 95%, 52%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(280, 85%, 65%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(220, 15%, 10%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 12%, 15%)",
          foreground: "hsl(0, 0%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(220, 12%, 15%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        popover: {
          DEFAULT: "hsl(220, 15%, 10%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        card: {
          DEFAULT: "hsl(220, 12%, 15%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        success: "hsl(145, 65%, 45%)",
        warning: "hsl(35, 95%, 55%)",
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 90%)",
          200: "hsl(0, 0%, 70%)",
          300: "hsl(0, 0%, 55%)",
          400: "hsl(0, 0%, 45%)",
          500: "hsl(0, 0%, 35%)",
          600: "hsl(0, 0%, 25%)",
          700: "hsl(220, 10%, 20%)",
          800: "hsl(220, 12%, 15%)",
          900: "hsl(220, 15%, 10%)",
        },
        hero: {
          text: "hsl(0, 0%, 100%)",
        },
        navbar: {
          text: "hsl(0, 0%, 90%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(220, 95%, 62%) 0%, hsl(280, 85%, 65%) 100%)',
        'gradient-2': 'linear-gradient(180deg, hsl(220, 95%, 62%) 0%, hsl(220, 95%, 52%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(220, 95%, 62%) 0%, hsl(280, 85%, 65%) 100%)',
      },
    },
  },
  plugins: [],
}
