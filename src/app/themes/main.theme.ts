const colors = {
  primary: '#ff3c64',
  secondary: '#f4f2f2',
  gray: '#cccccc',
}

export const main = {
  ...colors,
  body: {
    backgroundColor: '#e6f0ea',
  },
  card: {
    backgroundColor: '#ffffff',
  },
  text: {
    font: 'Helvetica, sans-serif',
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
        default: '#000000',
      },
      numbers: {
        positive: '#00873c',
        negative: '#eb0f29',
        zero: '#000000',
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
        textColor: '#ffffff',
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
        borderColor: '#000000',
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: '#ffffff',
        borderColor: colors.gray,
      },
    },
    secondary: {
      default: {
        backgroundColor: 'transparent',
        textColor: '#000000',
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
        borderColor: '#000000',
      },
      disabled: {
        backgroundColor: colors.gray,
        textColor: '#ffffff',
        borderColor: colors.gray,
      },
    },
  },
}
