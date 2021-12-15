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
    <LayoutHero title="Logan" noBanner>
      <Seo title="Logan" />
      <S.DefaultHeader style={{marginTop: `4vh`}}>
        <S.DefaultTitle>VENDE-SE</S.DefaultTitle>
        <S.DefaultDescription>Renault Logan 2011/2012</S.DefaultDescription>
      </S.DefaultHeader>
      <S.MainContent style={{ maxWidth: '100vw' }}>
        <div className="slide-container">
        <Slide>
         {LoganImages.map((image)=> (
            <div className="each-slide" key={random()}>
              <S.SliderWrapper style={{backgroundImage: `url(${image.node.childImageSharp.fluid.src})`}} />
            </div>
          ))}
        </Slide>
      </div>
      <S.SubTitle> - Renault LOGAN Expres./Exp. UP Hi-Flex 1.0 16V 4p - </S.SubTitle>
        <S.DataTable>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Modelo Base</th>
            <th>Código Fipe</th>
            <th>Ano</th>
            <th>Referência FIPE</th>
          </tr>
          <tr>
            <td>Renault</td>
            <td>Logan</td>
            <td>Logan</td>
            <td>025136-4</td>
            <td>2011</td>
            <td>Dezembro 2021</td>
          </tr>
        </S.DataTable>

        <blockquote>
          Valor atual em Dezembro de 2021: <strong>R$ 23.376,00</strong>
        </blockquote>

        <S.CustomParagraphy>
          <a href='https://www.tabelafipebrasil.com/carros/RENAULT/LOGAN-EXPRES-EXP-UP-HI-FLEX-10-16V-4P/2011-Gasolina' target="_blank" rel="noreferrer">Detalhes no site da tabela Fipe</a>
        </S.CustomParagraphy>

        <S.CustomParagraphy>Excelente veiculo, usado apenas para passeio, estou bunscando vender por questoes financeiras, atualmente todas as parcelas estao em dia, sem multas ou bloqueios. Peco apenas o valor que falta para quitar o veiculo ou alguem que queira trnaferir o financeamento para seu nome.</S.CustomParagraphy>

        <blockquote>
          Valor Pedido: <strong>R$ 17.500</strong> (valor para quitar o financiamento) ou transferencia do financiamento.
        </blockquote>
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
