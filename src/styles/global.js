import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Comic Neue', cursive;
    src: url('/public/fonts/ComicNeue-Regular');
  }
  
  @font-face {
    font-family:'Comic Neue', cursive;
    src: url('/public/fonts/ComicNeue-Bold');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Comic Neue', cursive;
    src: url('/public/fonts/ComicNeue-Italic');
    font-style: italic;
  }

  @font-face {
    font-family: 'Comic Neue', cursive;
    src: url('/public/fonts/ComicNeue-Light');
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Comic Neue', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }
`
