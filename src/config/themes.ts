import { DefaultTheme } from 'styled-components';

export interface IRubiTheme {
  color?: {
    background?: {
      primary?: string
      secondary?: string
    }
    font?: {
      primary?: string
      secondary?: string
    }
  }
}

export const LightTheme: DefaultTheme  = {
  color: { 
    background: {
      primary: 'white',
      secondary: 'black'
    },
    font: {
      primary: 'black',
      secondary: 'white'
    }
  }
}

export const DarkTheme: DefaultTheme = {

}