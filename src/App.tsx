import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from 'config/themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div>
        Hello, Rubi
      </div>
    </ThemeProvider>
  )
}

export default App;
