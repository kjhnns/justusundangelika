import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 16px;
  }


  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
background: url("../../images/bg.jpg");

  }
`

export default GlobalStyles
