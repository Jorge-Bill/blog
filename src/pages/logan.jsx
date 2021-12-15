import React from 'react'

import { graphql } from 'gatsby'
import { LayoutHero, Seo } from '@components'
import { random } from '@utils/random'

import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'

import * as S from '@styles/default'

const LoganPage = ({ ...props }) => {
  const LoganImages = props.data.allFile.edges

  return (
    <LayoutHero title="Logan" bannerTags="car">
      <Seo title="Logan" />
      <S.DefaultHeader>
        <S.DefaultTitle>VENDE-SE</S.DefaultTitle>
        <S.DefaultDescription>Renault Logan 2011/2012</S.DefaultDescription>
      </S.DefaultHeader>
      <S.MainContent style={{ maxWidth: '100vw' }}>
        <div className="slide-container">
        <Slide>
         {LoganImages.map((image)=> (
            <div className="each-slide" key={random()}>
              <S.SliderWrapper style={{backgroundImage: `url(${image.node.childImageSharp.fluid.src})`}}>
                {/* <span>{image.node.childImageSharp.fluid.originalName}</span> */}
              </S.SliderWrapper>
            </div>
          ))}
        </Slide>
      </div>
      </S.MainContent>
    </LayoutHero>
  )
}

export const query = graphql`
  query LoganImages {
    allFile(filter: {extension: {eq: "jpg"}, sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1240, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
`


export default LoganPage
