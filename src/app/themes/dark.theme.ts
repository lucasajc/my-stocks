import { ITheme } from './theme.types'

const colors = {
  primary: '#ff3c64',
  secondary: '#f4f2f2',
  black: '#000000',
  white: '#ffffff',
  green: '#00873c',
  greenLight: '#e6f0ea',
  red: '#eb0f29',
  grayLight: '#f7f4f5',
  gray: '#C9D1D9',
  dark: '#0D1117',
}

export const dark: ITheme = {
  colors: { ...colors },
  body: {
    backgroundColor: colors.dark,
  },
  card: {
    default: {
      backgroundColor: '#161A23',
    },
    hover: {
      backgroundColor: colors.black,
    },
  },
  link: {
    default: {
      color: colors.white,
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
        default: colors.gray,
      },
      numbers: {
        positive: colors.green,
        negative: colors.red,
        zero: colors.gray,
      },
    },
  },
  input: {
    primary: {
      default: {
        textColor: colors.gray,
        backgroundColor: 'transparent',
        borderColor: colors.primary,
      },
    },
    secondary: {
      default: {
        textColor: colors.gray,
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
        textColor: colors.gray,
        borderColor: colors.black,
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: colors.gray,
        borderColor: colors.gray,
      },
    },
    secondary: {
      default: {
        backgroundColor: 'transparent',
        textColor: colors.gray,
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: colors.black,
        textColor: colors.gray,
        borderColor: colors.gray,
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: colors.gray,
        borderColor: colors.gray,
      },
    },
  },
}
