import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', 'Fjalla One', 'Anton', 'Francois One', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .aloha {
    font-family: 'Anton', sans-serif;
  }
`;
