import { Theme } from 'theme-ui';

const fontSizes = [
  '0.800rem',
  '1.000rem',
  '1.250rem',
  '1.500rem',
  '2.000rem',
  '2.500rem',
];

const space = [
  '0.000rem',
  '0.250rem',
  '0.500rem',
  '1.000rem',
  '2.000rem',
  '3.000rem',
  '5.000rem',
];

const theme: Theme = {
  useColorSchemeMediaQuery: true,
  printColorModeName: 'light',
  useLocalStorage: false,
  breakpoints: ['40rem'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  space,
  fontSizes,
  fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#050708',
    background: '#ffffff',
    muted: '#666666',
    highlight: '#efefef',
    primary: '#f1553a',
    secondary: '#1d93b2',
    tertiary: '#b8c05d',
    accent: '#fcbb1a',
    modes: {
      light: {
        text: '#050708',
        background: '#ffffff',
        muted: '#666666',
        highlight: '#efefef',
      },
      dark: {
        text: '#dddddd',
        background: '#050708',
        muted: '#898989',
        highlight: '#333333',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      // For remark-autolink-headings
      '&:hover': {
        '.anchor-link': {
          visibility: [null, 'visible'],
        },
      },
    },
    label: {
      fontSize: fontSizes[0],
      color: 'muted',
    },
    footer: {
      lineHeight: 2,
      fontSize: fontSizes[0],
      display: 'block',
    },
    default: {
      fontSize: fontSizes[1],
      lineHeight: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      h1: {
        variant: 'text.heading',
        fontSize: [fontSizes[4], fontSizes[5]],
      },
      h2: {
        variant: 'text.heading',
        fontSize: [fontSizes[3], fontSizes[4]],
      },
      h3: {
        variant: 'text.heading',
        fontSize: [fontSizes[2], fontSizes[3]],
      },
      // More space between headings
      'h2:not(:first-of-type)': {
        marginTop: [space[5]],
      },
      h4: {
        variant: 'text.heading',
        fontSize: [fontSizes[1], fontSizes[2]],
      },
      h5: {
        variant: 'text.heading',
        fontSize: [fontSizes[1], fontSizes[2]],
      },
      h6: {
        variant: 'text.heading',
        fontSize: [fontSizes[1], fontSizes[2]],
      },
      // For remark-autolink-headings
      '.anchor-link': {
        visibility: 'hidden',
        float: 'left',
        lineHeight: 1,
        paddingRight: space[1],
        marginLeft: `calc(-${space[3]} - ${space[1]})`,
        fill: 'text',
      },
      code: {
        backgroundColor: 'highlight',
        borderRadius: 'default',
        color: 'primary',
        padding: space[1],
      },
      // For Tidbyt gifs to look a little nicer; this uses the techniques that Pixlet uses when it renders (the mask, etc)
      '.tidbyt-gif-container': {
        backgroundColor: '#000',
        width: 'fit-content',
      },
      '.tidbyt-gif': {
        imageRendering: 'pixelated',
        maskSize: 'contain',
        webkitMaskSize: 'contain',
        maskImage: "url('/assets/projects/tidbyt/mask.png')",
        webkitMaskImage: "url('/assets/projects/tidbyt/mask.png')",
      },
      // For fixing how MDX renders `<p>` tags inside of lists, causing margins
      'li > p': {
        margin: 0,
      },
    },
    a: {
      color: 'inherit',
      '&:hover': {
        color: 'primary',
      },
    },
    p: {
      variant: 'text.default',
    },
    li: {
      variant: 'text.default',
    },
    footer: {
      backgroundColor: 'highlight',
      fontSize: fontSizes[0],
      paddingY: space[4],
      color: 'muted',
      a: {
        color: 'muted',
      },
    },
  },
  radii: {
    default: '3px',
    large: '10px',
    full: '9999px',
  },
  sizes: {
    container: '50rem',
    space,
  },
  layout: {
    container: {
      paddingX: space[3],
    },
  },
  buttons: {
    primary: {
      '&:hover': {
        color: 'text',
        cursor: 'pointer',
      },
    },
    small: {
      fontSize: [0],
      color: 'muted',
      bg: 'highlight',
      '&:hover': {
        color: 'highlight',
        bg: 'muted',
        cursor: 'pointer',
      },
    },
  },
};

export default theme;
