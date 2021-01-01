import merge from 'lodash/merge'
import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'
import cyan from '@material-ui/core/colors/cyan'
import { deepPurple, orange, purple } from '@material-ui/core/colors'

const base: ThemeOptions = {
  palette: {
    contrastThreshold: 4.5,
  },
  typography: {
    fontSize: 16,
  },
}

export const lightPalette: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: purple[800],
    },
    secondary: {
      main: orange[600],
    },
  },
}

export const darkPalette: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
      contrastText: 'rgb(0,0,0,0.87)',
    },
    secondary: {
      main: orange[300],
      contrastText: 'rgb(0,0,0,0.87)',
    },
  },
}

export const lightTheme = createMuiTheme(merge(lightPalette, base))
export const darkTheme = createMuiTheme(merge(darkPalette, base))
