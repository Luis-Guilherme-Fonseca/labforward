import React, { Fragment } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import colors from './Colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function StyledSettings({children}) {
  return (
    <ThemeProvider theme={{...colors}}>
      <Fragment>
        <GlobalStyle/>
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default StyledSettings