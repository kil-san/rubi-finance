import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from 'config/themes'
import { Home } from 'pages'
import UseWeb3Context from 'hooks/UseWeb3Context'

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <UseWeb3Context>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UseWeb3Context>
    </ThemeProvider>
  )
}

export default App;
