import React from 'react'
import PropTypes from 'prop-types'

export default function HTML({ ...props }) {
  const { htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents } = props
  return (
    <html {...htmlAttributes} lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="google-site-verification" content="khzGXPM--SlAFG6V0_NIO4ITwpai3NBnCEtvgEMOlO8" />
        {headComponents}
      </head>
      <body {...bodyAttributes} className="dark">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                setTheme(preferredTheme || 'dark');

                window.__onDisplayChange = function() {};
                function setDisplay(newDisplay) {
                  window.__display = newDisplay;
                  preferredDisplay = newDisplay;
                  document.body.id = newDisplay;
                  window.__onDisplayChange(newDisplay);
                }
                var preferredDisplay;
                try {
                  preferredDisplay = localStorage.getItem('display');
                } catch (err) { }
                window.__setPreferredDisplay = function(newDisplay) {
                  setDisplay(newDisplay);
                  try {
                    localStorage.setItem('display', newDisplay);
                  } catch (err) {}
                }
                setDisplay(preferredDisplay || 'list');

              })();
            `
          }}
        />
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  headComponents: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  bodyAttributes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  preBodyComponents: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  body: PropTypes.string,
  postBodyComponents: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

HTML.defaultProps = {
  htmlAttributes: {},
  headComponents: [],
  bodyAttributes: {},
  preBodyComponents: [],
  body: '',
  postBodyComponents: []
}
