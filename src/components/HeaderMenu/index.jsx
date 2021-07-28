import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import getThemeColor from "../../utils/getThemeColor"

import * as S from './styles'

const HeaderMenu = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query SiteMetadataHeader {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)

  return (
    <S.HeaderWrapper>
      <S.HeaderProfile>
        <h1>{title}</h1>
        <p>{position}</p>
      </S.HeaderProfile>
      <S.HeaderMenuLinks />
      <S.HeaderSocial />
    </S.HeaderWrapper>
  )
}

export default HeaderMenu
