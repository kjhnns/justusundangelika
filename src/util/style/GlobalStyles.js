import { createGlobalStyle } from './index'
import logo from '../../images/bg.jpg'

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
background: ${logo};

  }
`

export default GlobalStyles
