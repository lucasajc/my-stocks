const colors = {
  primary: '#ff3c64',
  secondary: '#f4f2f2',
}

export const main = {
  ...colors,
  input: {
    primary: {
      default: {
        backgroundColor: '#ffffff',
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
    },
    secondary: {
      default: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        borderColor: colors.primary,
      },
      hover: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
        borderColor: '#000000',
      },
    },
  },
}
