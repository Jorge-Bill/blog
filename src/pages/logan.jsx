import React from 'react'

import { graphql } from 'gatsby'
import { LayoutHero, Seo } from '@components'
import { random } from '@utils/random'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'


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
        <Carousel>
         {LoganImages.map((image)=> (
            <div key={random()}>
              <S.SliderWrapper src={image.node.childImageSharp.fluid.src} />
            </div>
          ))}
        </Carousel>
      <S.SubTitle> - Renault LOGAN Expres./Exp. UP Hi-Flex 1.0 16V 4p - </S.SubTitle>
        <center>
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
        </center>

        <blockquote>
          Valor atual em Dezembro de 2021: <strong>R$ 23.376,00</strong> - De acordo com a tabela FIPE.
        </blockquote>

        <S.CustomParagraphy>
          <a href='https://www.tabelafipebrasil.com/carros/RENAULT/LOGAN-EXPRES-EXP-UP-HI-FLEX-10-16V-4P/2011-Gasolina' target="_blank" rel="noreferrer">Detalhes no site da tabela Fipe</a>
        </S.CustomParagraphy>

        <S.SubTitle> - Informações Gerais - </S.SubTitle>

        <S.CustomParagraphy>Excelente veículo, usado apenas para passeio, estou buscando vender por questões financeiras. Atualmente todas as parcelas estão em dia, sem multas ou bloqueios. </S.CustomParagraphy>
        <S.CustomParagraphy>Peço apenas o valor que falta para quitar o veiculo ou alguém que queira transferir o financiamento para seu nome.</S.CustomParagraphy>

        <blockquote>
          Valor Pedido: <strong>R$ 17.500</strong> (valor para quitar o financiamento) ou transferencia do financiamento.
        </blockquote>
        <S.CardsWrapper>
          <S.CustomCard>
              <Whatsapp className="mg-r" />
              <a href="https://api.whatsapp.com/send?phone=5511984224753&text=Jorge%20M." target="_blank" rel="noopener noreferrer">
                Contato via WhattsApp
              </a>
          </S.CustomCard>
        </S.CardsWrapper>
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
          fluid(maxWidth: 1080, quality: 100) {
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
