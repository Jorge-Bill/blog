---
title: Tenha amor por programar mas não apego ao código
description: Um post sobre o quão importante é gostar de programar, mas sem se
  manter apegado ao código produzido.
date: 2021-08-03 06:41:14
thumbnail: assets/img/captura-de-tela-2021-08-03-182728.png
category: code
background: Red
---

Tenha amor por programar, mas não apegou ao código.

### Afinal o que isto significa?

Significa, que você pode amar programar e se divertir no processo, mas não deve achar que o que foi codificado por você, pelos outros, e por aqueles que vieram depois de você, foi escrito em pedra e não pode mudar.

Um exemplo muito claro disto é este blog, resolvi criar um novo layout e para isto, alterei vários componentes, para torna-los mais customizáveis, mudei a estrutura dele inteiro e **546 linhas** de códigos alterados depois. Ficou do jeito que eu queria.

![new header https://jorgemendes.com.br/](assets/img/captura-de-tela-2021-08-03-182728.png "new header https://jorgemendes.com.br/")

Até transformei um simples componente de **sidebar** em um componente de **navegação** completo, que só preciso passar a orientação para ele conseguir identificar se será um navbar no topo da tela ou sidebar.

### Navbar no topo do site

![Navbar no topo do site](assets/img/topo.png "Navbar no topo do site")

### Sidebar

![sidebar](assets/img/lateral.png "sidebar")

#### Segue o código atual do componente após as mudanças

```javascript
import React from "react"
import { Profile, SocialLinks, MenuLinks } from "../index"
import PropTypes from "prop-types"

import * as S from "./styled"

const NavigationBar = ({
  variant,
  profileSize,
  profileAvatar,
  profileDescription,
  menuLinksDisplay,
  firstMenu,
  socialSize,
  ...props
}) => (
  <S.NavigationBarWrapper variant={variant} {...props}>
    <Profile
      size={profileSize}
      showAvatar={profileAvatar}
      showDescription={profileDescription}
    />
    {firstMenu ? (
      <>
        <MenuLinks variant={menuLinksDisplay} />
        <SocialLinks size={socialSize} />
      </>
    ) : (
      <>
        <SocialLinks size={socialSize} />
        <MenuLinks variant={menuLinksDisplay} />
      </>
    )}
  </S.NavigationBarWrapper>
)

NavigationBar.propTypes = {
  variant: PropTypes.oneOf(["navbar", "sidebar"]),
  profileAvatar: PropTypes.bool,
  profileDescription: PropTypes.bool,
  menuLinksDisplay: PropTypes.oneOf(["inline", "column"]),
  firstMenu: PropTypes.bool,
  profileSize: PropTypes.oneOf(["small", "auto"]),
  socialSize: PropTypes.oneOf(["small", "auto"]),
}

NavigationBar.defaultProps = {
  variant: "sidebar",
  profileAvatar: false,
  profileDescription: true,
  menuLinksDisplay: "column",
  firstMenu: false,
  profileSize: "auto",
  socialSize: "auto",
}

export default NavigationBar
```

### Header Banner do site

Depois resolvi melhorar o banner, e renderizar imagens de maneira randômica de acordo com as tags passadas, mas para fazer isto, fiz uma otimização no componente, usando o [React.Memo](https://pt-br.reactjs.org/docs/react-api.html#reactmemo) e [react-lazyload](https://www.npmjs.com/package/react-lazyload), e assim criando um loader antes do banner renderizar.

```javascript
import React from "react"

import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"

import * as S from "./styles"

const HeaderBanner = ({ title, tags, ...props }) => {
  const refLoader = React.useRef()
  const removeLoader = () => refLoader.current.remove()

  return (
    <S.BannerWrapper {...props}>
      <LazyLoad>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.Loader ref={refLoader} />
        <S.ImageBanner
          src={`https://source.unsplash.com/1600x900/?desktop,${tags}`}
          alt={`Desktop wallpapers random about ${tags}`}
          onLoad={removeLoader}
          onError={removeLoader}
        />
      </LazyLoad>
    </S.BannerWrapper>
  )
}

HeaderBanner.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
}

HeaderBanner.defaultProps = {
  title: "",
  tags: "nature,star,galaxy,space",
}

export default React.memo(HeaderBanner)
```

#### Carregamento otimizado do banner

![banner carregando](assets/img/loader.png "banner carregando")

#### Carregamento completo do banner

![banner ja carregado](assets/img/about.png "banner ja carregado")

Tudo bem mudar e melhorar, até porque programação é isto, a mudança precisa acontecer e é esperada.

> Afinal na vida tudo muda, inclusive o seu código.
