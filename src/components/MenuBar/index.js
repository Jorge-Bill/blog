import React, { useState, useEffect } from "react"

import PropTypes from 'prop-types'
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { User } from "@styled-icons/boxicons-regular/User"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as LightOff } from "@styled-icons/remix-line/Lightbulb"
import { LightbulbFlash as LightOn } from "@styled-icons/remix-fill/LightbulbFlash"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { List } from "@styled-icons/evaicons-solid/List"
import { FileText } from '@styled-icons/bootstrap/FileText'
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = ({ variant, ...props }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isLightMode = theme === "light"
  const isListMode = display === "list"

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
            <Home />
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
            <FileText />
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
            <User />
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
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup variant={variant}>
        <S.MenuBarItem
          title="change theme"
          onClick={() => {
            window.__setPreferredTheme(isLightMode ? "dark" : "light")
          }}
          className={theme}
        >
          {isLightMode ? <LightOn /> : <LightOff />}
        </S.MenuBarItem>

       {variant === 'right' &&
        <S.MenuBarItem
          title="change posts layout"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
       }

        <S.MenuBarItem
          title="go to top"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

MenuBar.propTypes = {
  variant: PropTypes.oneOf(['right', 'bottom']),
}

MenuBar.defaultProps = {
  variant: 'right',
}

export default MenuBar
