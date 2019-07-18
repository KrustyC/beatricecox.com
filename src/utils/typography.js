import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  // headerFontFamily: ['Bazar', 'Arial', 'sans-serif'],
  // bodyFontFamily: ['Bazar', 'serif'],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
