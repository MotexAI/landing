export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Motex brand palette — source of truth: docs/branding/branding.md
        brand: {
          navy:        '#05162B',  // primary dark background
          blue:        '#1D49A7',  // primary accent, CTAs
          sky:         '#5A8BE0',  // secondary accent, highlights
          'blue-hover':'#163a86',  // blue hover state
        },
        // Editorial dark backgrounds (landing-specific — intentional deviation)
        bg: {
          primary:   '#080e1a',    // deep navy-black (hero, footer)
          secondary: '#0d1424',    // features section, card hover
          card:      '#111c30',    // feature cards
        },
        // Borders (blue-undertone, derived from navy)
        edge: {
          DEFAULT: '#1a2840',
        },
        // Content text (blue-undertone grays from branding.md)
        content: {
          primary:   '#9BA5B5',  // brand gray-400 — secondary text
          secondary: '#5C6879',  // brand gray-600 — tertiary/muted text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
}
