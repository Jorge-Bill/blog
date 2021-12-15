import React from 'react'

import { graphql } from 'gatsby'
import { LayoutHero, Seo } from '@components'
import { random } from '@utils/random'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { Car } from '@styled-icons/boxicons-solid/Car'
import { Renault } from '@styled-icons/simple-icons/Renault'
import { CalendarWeek } from '@styled-icons/bootstrap/CalendarWeek'
import { Speedometer } from '@styled-icons/bootstrap/Speedometer'
import { Gas } from '@styled-icons/fluentui-system-filled/Gas'
import { GearWideConnected } from '@styled-icons/bootstrap/GearWideConnected'
import { Steering } from '@styled-icons/remix-fill/Steering'
import { PaintRoll } from '@styled-icons/boxicons-solid/PaintRoll'
import { SdCard } from '@styled-icons/material-outlined/SdCard'
import { KeyboardLayoutOneHandedLeft } from '@styled-icons/fluentui-system-regular/KeyboardLayoutOneHandedLeft'


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

        <S.SubTitle> - Informações Gerais - </S.SubTitle>

        <S.CustomParagraphy>Excelente veículo, usado apenas para passeio, estou buscando vender por questões financeiras. Atualmente todas as parcelas estão em dia, sem multas ou bloqueios. </S.CustomParagraphy>
        <S.CustomParagraphy>Peço apenas o valor que falta para quitar o veiculo ou alguém que queira transferir o financiamento para seu nome.</S.CustomParagraphy>

        <S.SubTitle> - Informações sobre o veículo - </S.SubTitle>

        <blockquote>
          <ul>
            <li>Documentação em dia</li>
            <li>Licenciamento 2022 pago</li>
            <li>Sem multas ou pendências</li>
            <li>Alarmes</li>
            <li>Ar condicionado</li>
            <li>Porta malas de 510 Litros</li>
            <li>Insulfilm novo G5</li>
            <li>Placa Mercosul</li>
          </ul>
        </blockquote>

        <S.CustomParagraphy>Características Gerais</S.CustomParagraphy>

        <S.CardsWrapper className="grid">
          <S.CustomCard>
              <Car className="mg-r" />
              Modelo
              <br />
              LOGAN
          </S.CustomCard>
          <S.CustomCard>
              <Renault className="mg-r" />
              Marca
              <br />
              RENAULT
          </S.CustomCard>
          <S.CustomCard>
              <CalendarWeek className="mg-r" />
              Ano
              <br />
              2011/12
          </S.CustomCard>
          <S.CustomCard>
              <Speedometer className="mg-r" />
              Quilometragem
              <br />
              120000
          </S.CustomCard>
          <S.CustomCard>
              <Gas className="mg-r" />
              Combustível
              <br />
              Flex
          </S.CustomCard>
          <S.CustomCard>
              <GearWideConnected className="mg-r" />
              Câmbio
              <br />
              Manual
          </S.CustomCard>
          <S.CustomCard>
              <Steering className="mg-r" />
              Direção
              <br />
              Hidráulica
          </S.CustomCard>
          <S.CustomCard>
              <PaintRoll className="mg-r" />
              Cor
              <br />
              Prata
          </S.CustomCard>
          <S.CustomCard>
              <SdCard className="mg-r" />
              Portas
              <br />
              4 portas
          </S.CustomCard>
          <S.CustomCard>
              <KeyboardLayoutOneHandedLeft className="mg-r" />
              Final de placa
              <br />
              0
          </S.CustomCard>
        </S.CardsWrapper>

        <S.SubTitle> - Informações tabela FIPE - </S.SubTitle>
        <center>
          <S.DataTable>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Modelo Base</th>
              <th>Código Fipe</th>
              <th>Valor Fipe</th>
              <th>Ano</th>
              <th>Referência FIPE</th>
            </tr>
            <tr>
              <td>Renault</td>
              <td>Logan</td>
              <td>Logan</td>
              <td>025136-4</td>
              <td> <strong>R$ 23.376,00</strong></td>
              <td>2011</td>
              <td>Dezembro 2021</td>
            </tr>
          </S.DataTable>
        </center>

        <S.CustomParagraphy>
          <a href='https://www.tabelafipebrasil.com/carros/RENAULT/LOGAN-EXPRES-EXP-UP-HI-FLEX-10-16V-4P/2011-Gasolina' target="_blank" rel="noreferrer">
            Link para o site da tabela Fipe
          </a>
        </S.CustomParagraphy>

        <S.SubTitle> - Informações Financiamento - </S.SubTitle>

        <center>
          <S.DataTable>
            <tr>
              <th>Banco</th>
              <th>Valor da parcela</th>
              <th>Parcelas pagas</th>
              <th>Parcelas Faltantes</th>
              <th>Valor de quitação</th>
            </tr>
            <tr>
              <td>Santander</td>
              <td>R$ 557,12</td>
              <td>16</td>
              <td>44</td>
              <td>R$ 18.000</td>
            </tr>
          </S.DataTable>
        </center>

        <blockquote>
          Valor Pedido: <strong>R$ 18.000</strong> (valor para quitar o financiamento) ou transferência do financiamento para seu nome.
        </blockquote>

        <S.CardsWrapper>
          <S.CustomCard>
              <Whatsapp className="mg-r" />
              <a href="https://api.whatsapp.com/send?phone=5511984224753&text=Boa%20Tarde" target="_blank" rel="noopener noreferrer">
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
