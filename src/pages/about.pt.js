import React from "react"
import LayoutCustom from "../components/LayoutCustom"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "../components/Post/styled"

const AboutPage = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "aboutPic.jpg" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <LayoutCustom>
      <SEO title="About" />
      <S.PostHeader>
        <S.PostTitle>Sobre</S.PostTitle>
        <S.PostDescription>Hello World! Meu nome é Jorge.</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <S.imgWrapper>
          <Img
            className="img-about"
            fixed={aboutImage.childImageSharp.fixed}
            alt="my picture"
          />
        </S.imgWrapper>
        <hr />
        <p>
          Tenho contato com T.I, desde os meus doze anos, quando em meu primeiro contato com um computador desktop Semp Toshiba de processador Pentium 4, 256gb de memória Ram e HD de 80 gb, me fascinou e desde então não consegui me distanciar desta área deslumbrante.
        </p>
        <p>
          Fui realizando pequenos cursos, e em 2010 ingressei no curso técnico em informática, qual me proporcionou trabalhar com ferramentas que me permitiram avançar em conhecimento, com o qual trabalhei como freelancer por cerca de dois anos sem nunca parar de aprimorar minhas habilidades. No ano de dois mil e doze, iniciei minha carreira no estado, me permitindo desenvolver um projeto com os adolescentes da instituição trabalhando com Arduino, utilizando os princípios do kit básico em aplicações primárias permitindo aprendizado de conceitos de física e matemática.
        </p>
        <p>
          Pensando em galgar um nível mais alto busquei uma graduação, escolhi o curso de Sistemas para internet na Faculdade de Tecnologia de São Roque – Fatec, referência na região que detém profissionais de alta referência e know-how, contribuindo para uma melhor compreensão do mercado
        </p>
        <p>
          Desde que me formei na faculdade, me mudei para São Paulo, uma das maiores cidades com mercado de TI.
        </p>
        <p>
          Com o tempo, aprendi front-end, back-end, dados e infra-estrutura também, e comecei a desenvolver meus projetos e sistemas.
        </p>
        <p>
          Desta forma, mantenho evoluindo minhas habilidades e me tornando um desenvolvedor melhor.
        </p>
      </S.MainContent>
    </LayoutCustom>
  )
}

export default AboutPage
