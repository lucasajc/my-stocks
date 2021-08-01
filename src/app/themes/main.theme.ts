const colors = {
  primary: '#ff3c64',
  secondary: '#f4f2f2',
  black: '#000000',
  white: '#ffffff',
  green: '#00873c',
  greenLight: '#e6f0ea',
  red: '#eb0f29',
  grayLight: '#f7f4f5',
  gray: '#cccccc',
}

export const main = {
  colors: { ...colors },
  body: {
    backgroundColor: colors.greenLight,
  },
  card: {
    default: {
      backgroundColor: colors.white,
    },
    hover: {
      backgroundColor: colors.grayLight,
    },
  },
  link: {
    default: {
      color: colors.black,
    },
    hover: {
      color: colors.primary,
    },
  },
  text: {
    font: "'Rubik', sans-serif;",
    sizes: {
      sm: '12px',
      md: '14px',
      lg: '18px',
      xlg: '24px',
      xxlg: '32px',
    },
    weights: {
      light: '300',
      normal: '400',
      bold: '600',
    },
    colors: {
      labels: {
        default: colors.black,
      },
      numbers: {
        positive: colors.green,
        negative: colors.red,
        zero: colors.black,
      },
    },
  },
  input: {
    primary: {
      default: {
        backgroundColor: 'transparent',
        borderColor: colors.primary,
      },
    },
    secondary: {
      default: {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
  },
  button: {
    primary: {
      default: {
        backgroundColor: colors.primary,
        textColor: colors.white,
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: colors.black,
        textColor: colors.white,
        borderColor: colors.black,
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: colors.white,
        borderColor: colors.gray,
      },
    },
    secondary: {
      default: {
        backgroundColor: 'transparent',
        textColor: colors.black,
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: colors.black,
        textColor: colors.white,
        borderColor: colors.black,
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: colors.white,
        borderColor: colors.gray,
      },
    },
  },
}
