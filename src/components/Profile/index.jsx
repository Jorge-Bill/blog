import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import getThemeColor from "@utils/getThemeColor"
import { Avatar } from "@components"

import * as S from "./styled"

const Profile = ({ size, showAvatar, showDescription, ...props }) => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper size={size} {...props}>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        {showAvatar && <Avatar />}
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      {showDescription && <S.ProfileDescription>{description}</S.ProfileDescription>}
    </S.ProfileWrapper>
  )
}

Profile.propTypes = {
  size: PropTypes.oneOf(['small', 'auto']),
  showAvatar: PropTypes.bool,
  showDescription: PropTypes.bool,
}

Profile.defaultProps = {
  size: 'auto',
  showAvatar: false,
  showDescription: true,
}

export default Profile
