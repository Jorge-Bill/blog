import React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"
import Menu from "./menu"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile />
        <Menu />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
