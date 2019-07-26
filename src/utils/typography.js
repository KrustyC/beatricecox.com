import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['100', '200', '300', '400', '400i', '700', '700i'],
    },
  ],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
