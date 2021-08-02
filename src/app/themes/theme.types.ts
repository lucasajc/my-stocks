export type ThemeName = 'dark' | 'main'

export interface IAppThemeContext {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

interface ColorsBackgroundTextBorder {
  backgroundColor: string
  textColor: string
  borderColor: string
}

export interface ITheme {
  colors: Record<string, string>
  body: { backgroundColor: string }
  card: {
    default: { backgroundColor: string }
    hover: { backgroundColor: string }
  }
  link: {
    default: {
      color: string
    }
    hover: {
      color: string
    }
  }
  text: {
    font: string
    sizes: {
      sm: string
      md: string
      lg: string
      xlg: string
      xxlg: string
    }
    weights: {
      light: string
      normal: string
      bold: string
    }
    colors: {
      labels: {
        default: string
      }
      numbers: {
        positive: string
        negative: string
        zero: string
      }
    }
  }
  input: {
    primary: {
      default: ColorsBackgroundTextBorder
    }
    secondary: {
      default: ColorsBackgroundTextBorder
    }
  }
  button: {
    primary: {
      default: ColorsBackgroundTextBorder
      hover: ColorsBackgroundTextBorder
      disabled: ColorsBackgroundTextBorder
    }
    secondary: {
      default: ColorsBackgroundTextBorder
      hover: ColorsBackgroundTextBorder
      disabled: ColorsBackgroundTextBorder
    }
  }
}
