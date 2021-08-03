---
title: Tenha amor por programar mas não apego ao código
description: Um post sobre o quão importante é gostar de programar, mas sem se
  manter apegado ao código produzido.
date: 2021-06-07 11:50:20
thumbnail: assets/img/captura-de-tela-2021-08-03-182728.png
category: code
background: Red
---
Tenha amor por programar, mas não apegou ao código. 

### Afinal o que isto significa?

Significa, que você pode amar programar e se divertir no processo, mas não deve achar que o que foi codificado por você, pelos outros, e por aqueles que vieram depois de você, foi escrito em pedra e não pode mudar.


Um exemplo muito claro disto é este blog, resolvi criar um novo layout e para isto, alterei vários componentes, para torna-los mais customizáveis, mudei a estrutura dele inteiro e **546 linhas** de códigos alterados depois. Ficou do jeito que eu queria.

![new header https://jorgemendes.com.br/](assets/img/captura-de-tela-2021-08-03-182728.png "new header https://jorgemendes.com.br/")


Até transformei um simples componente de **sidebar** em um componente de navegação completo, que só preciso passar a orientação para ele conseguir identificar se será um navbar no topo da tela ou sidebar.

Depois resolvi melhorar o banner, e renderizar imagens de maneira randômica de acordo com as tags passadas, mas para fazer isto, fiz uma otimização no componente, usando o [React.Memo](https://pt-br.reactjs.org/docs/react-api.html#reactmemo) e [react-lazyload](https://www.npmjs.com/package/react-lazyload), e assim criando um loader antes do banner renderizar.

Tudo bem mudar e melhorar, até porque programação é isto, a mudança precisa acontecer e é esperada. Afinal na vida tudo muda, inclusive o seu código.