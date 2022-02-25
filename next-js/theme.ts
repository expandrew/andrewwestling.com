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
  '4.000rem',
  '8.000rem',
];

const theme: Theme = {
  useColorSchemeMediaQuery: true,
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
        fontFamily: 'monospace',
        fontSize: fontSizes[0],
      },
      blockquote: {
        backgroundColor: 'highlight',
        borderRadius: 'default',
        padding: [space[2], space[4]],
        marginX: [space[2], space[4]],
        p: {
          variant: 'text.label',
          margin: 0,
        },
      },
      p: {
        marginY: space[3],
        color: 'inherit',
      },
      th: {
        borderBottomColor: 'muted',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      },
      td: {
        borderBottomColor: 'highlight',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      },
    },
    a: {
      color: 'inherit',
      '&:hover': {
        color: 'primary',
      },
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
};

export default theme;
