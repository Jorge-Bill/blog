import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #07b0b8;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --darker: rgba(0, 0, 0, 0.75);
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body.dark {
    --borders: #090909;
    --texts: #00adb5;
    --postColor: #f9f8eb;
    --highlight: #00fff5;
    --mediumBackground: #222831;
    --background: #393e46;
    --timelineColor: #07b0b8;
    --timelineLine: #00fff5;
    --timelineDate: #f9f8eb;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #00fff5;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --timelineColor: #f0f0f3;
    --timelineLine: #00fff5;
    --timelineDate: #090909;
    --white: #fff;
    --black: #222;
  }
`
export default GlobalStyles
