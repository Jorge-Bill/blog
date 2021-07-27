import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Avatar, MenuLinks, SocialLinks } from '../index'
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
        <Avatar />
        <S.HeaderDesc>
          <h1>{title}</h1>
          <p>{position}</p>
        </S.HeaderDesc>
      </S.HeaderProfile>
      <S.HeaderMenuLinks>
        <MenuLinks />
      </S.HeaderMenuLinks>
      <S.HeaderSocial>
        <SocialLinks />
      </S.HeaderSocial>
    </S.HeaderWrapper>
  )
}

export default HeaderMenu
