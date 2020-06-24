import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Poppins', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'serif'],
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['100', '200', '300', '400', '400i', '700', '700i'],
    },
  ],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
