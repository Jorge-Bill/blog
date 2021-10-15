import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import getThemeColor from '@utils/getThemeColor'
import Icons from './Icons'

import * as S from './styled'

const MenuBar = ({ variant, ...props }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isLightMode = theme === 'light'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper variant={variant} {...props}>
      <S.MenuBarGroup variant={variant}>
        <S.MenuBarLink
          to="/"
          title="Back to Home"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icons.Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/posts/"
          title="Go to Home"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icons.FileText />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          to="/about/"
          title="Go to About"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icons.User />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          title="Go to Search"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Icons.Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup variant={variant}>
        <S.MenuBarItem
          title="change theme"
          onClick={() => {
            window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
          }}
          className={theme}
        >
          {isLightMode ? <Icons.LightOn /> : <Icons.LightOff />}
        </S.MenuBarItem>

        {variant === 'right' && (
          <S.MenuBarItem
            title="change posts layout"
            onClick={() => {
              window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
            }}
            className="display"
          >
            {isListMode ? <Icons.Grid /> : <Icons.List />}
          </S.MenuBarItem>
        )}

        <S.MenuBarItem
          title="go to top"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
        >
          <Icons.Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

MenuBar.propTypes = {
  variant: PropTypes.oneOf(['right', 'bottom'])
}

MenuBar.defaultProps = {
  variant: 'right'
}

export default MenuBar
