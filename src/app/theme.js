import { injectGlobal } from 'styled-components'
import { lighten, darken } from 'polished'

const PRIMARY = '#F26565'
const ACCENT = '#3445BF'
const INFO = '#2196F3'
const LINK = '#03A9F4'
const DANGER = '#F44336'
const WARNING = '#FFC107'
const DARK = '#1f2e41'
const GREY = '#BDBDBD'

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 768px) {
      overflow: hidden !important;
    }
    color: ${DARK};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 5px 5px 5px #D9D8DB; 
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: ${PRIMARY};
      border-radius: 0px;
  }
`

export default {
  colors: {
    primary: PRIMARY,
    accent: ACCENT,
    info: INFO,
    link: LINK,
    danger: DANGER,
    warning: WARNING,
    dark: DARK,
    grey: GREY,
    light: lighten(0.5, GREY)
  },
  sizes: {
    xs: '767px', // less than - phones
    sm: '768px', // >= than - tablets
    md: '992px', // >= than - medium desktops
    lg: '1200px' // >= than - large desktops
  },
  utils: {
    softDarken: color => darken(0.2, color),
    hardDarken: color => darken(0.5, color),
    softLighten: color => lighten(0.2, color),
    hardLighten: color => lighten(0.5, color)
  }
}
