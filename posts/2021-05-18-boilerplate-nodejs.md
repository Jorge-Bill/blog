---
title: Boilerplate nodejs
description: criei um boilerplate para api em nodejs
date: 2021-05-18 09:08:53
thumbnail: assets/img/1_mp91a9rzagntggjbnwu4yw.png
category: JS
background: Lightgreen
---


Recentemente no meu trabalho me vi cuidando de uma aplicação em **nodejs**, então optei por justar o projeto de acordo com as melhores práticas de desenvolvimento de software que conheço.

Ali montei a seguinte estrutura de diretórios

* src
* * controllers
  * services
  * utils
  * routes (file)
  * app (file)

Adicionei  um gerador que cria os arquivos para desenvolvimento do projeto nos diretórios corretos, com o padrão correto.

### plop

![plop ](assets/img/plop.gif "plop")

[Link plop no github](https://github.com/plopjs/plop)

### commitizen + husky

Adicionei a combinação de commitizen + husky para criar commits com mensagens concisas e com escopo definido.

só com o commitizen ao digitar **git cz** ele abre essa interface no terminal e ajuda no commit, mas ai vêm o pulo do gato. Com o husky você pode criar um hook para sobrescrever o comando git commit e assim usar o commitizen por default, inclusive, isso também alimenta o changelog da aplicação.

![commitizen](assets/img/add-commit.png "commitizen")

[Link husky](https://typicode.github.io/husky/#/)

[Link commitizen](https://github.com/commitizen/cz-cli)

Fiz isso em busca de organizar um projeto, que poderia ser mantido por diversas pessoas, ganhando produtividade e padronização.

> Caso alguém se interesse, segue o[ link do repositório](https://github.com/Jorge-Bill/boilerplate-node)