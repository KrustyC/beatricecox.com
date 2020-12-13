import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['EB Garamond', 'Arial', 'sans-serif'],
  bodyFontFamily: ['EB Garamond', 'serif'],
  googleFonts: [
    {
      name: 'EB Garamond',
      styles: ['100', '200', '300', '400', '400i', '700', '700i'],
    },
    {
      name: 'Oswald',
      styles: ['700', '700b'],
    },
  ],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
