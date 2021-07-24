const colors = {
  primary: '#ff3c64',
  secondary: '#ffffff',
}

export const main = {
  ...colors,
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
