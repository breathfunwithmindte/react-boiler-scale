const h1Size = 3.4;
const h2Size = 2.4;
const h3Size = 1.6;
const h4Size = 1.4;
const h5Size = 0.97;
const h6Size = 0.97;
const buttonSize = 1;

export const LightStyle = {
  mode: "LIGHT",
  css: {
    "background-1": "#FFFFFF",
    "background-2": "#F0F2F5",
    "background-3": "#E4E6E9",
    "background-4": "rgba(0,0,0,0.14)",
    "background-5": "rgba(0,0,0,0.054)",
    "space-1": "2.3rem",
    "space-2": "1.4rem",
    "space-3": "0.97rem",
    "space-4": "0.69rem",
    "space-5": "0.14rem",
    "primary-1": "#009B77",
    "primary-2": "#009B77",
    "primary-3": "#009B77",
    "primary-4": "#009B77",
    "primary-5": "#009B77",
    "width-1": "963px",
    "width-2": "492px",
    "width-3": "369px",
    "width-4": "256px",
    "width-5": "128px",
    "height-1": "234px",
    "height-2": "128px",
    "height-3": "68px",
    "height-4": "46px",
    "height-5": "34px",
    "color-1": "#242526",
    "color-2": "rgba(0,0,0,0.69)",
    "color-3": "rgba(0,0,0,0.56)",
    "color-4": "rgba(0,0,0,0.34)",
    "color-5": "rgba(0,0,0,0.14)",
  },
  mui: {
    palette: {
      type: 'light',
      primary: {
        main: '#009B77',
      },
      secondary: {
        main: '#9b2335',
      },
      text: {
        primary: 'rgba(0,0,0,0.54)',
        secondary: 'rgba(0,0,0,0.34)',
        disabled: 'rgba(0,0,0,0.14)',
        hint: 'rgba(0,0,0,0.14)',
      },
      error: {
        main: '#d50000',
      },
      divider: 'rgba(0,0,0,0.14)',
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
    typography: {
      h1: {
        fontSize: `${h1Size}rem`,
        fontWeight: 500,
        '@media (max-width:600px)': { fontSize: `${h1Size/2}rem` }
      },
      h2: {
        fontSize: `${h2Size}rem`,
        fontWeight: 500,
        '@media (max-width:600px)': { fontSize: `${h2Size*0.69}rem` }
      },
      h3: {
        fontSize: `${h3Size}rem`,
        fontWeight: 400,
        '@media (max-width:600px)': { fontSize: `${h3Size*0.69}rem` }
      },
      h4: {
        fontSize: `${h4Size}rem`,
        fontWeight: 300,
        '@media (max-width:600px)': { fontSize: `${h4Size*0.69}rem` }
      },
      h5: {
        fontSize: `${h5Size}rem`,
        fontWeight: 300,
        '@media (max-width:600px)': { fontSize: `${h5Size*0.69}rem` }
      },
      h6: {
        fontSize: `${h6Size}rem`,
        fontWeight: 100,
        '@media (max-width:600px)': { fontSize: `${h6Size*0.69}rem` }
      },
      button: {
        fontSize: `${buttonSize}rem`,
        fontWeight: 500,
        lineHeight: 1.14,
        '@media (max-width:600px)': { fontSize: `${buttonSize/2}rem` }
      },
    }
  }
}