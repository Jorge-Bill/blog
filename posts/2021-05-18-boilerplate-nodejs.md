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



### Estrutura

#### src

A pasta que contém todo o código fonte do projeto.

#### controllers

A pasta que possui os arquivos que irão servir como controllers e gerenciando a aplicação.

#### services

Nesta pasta temos todos os serviços que possibilitam o serviço se comunicar com endpoints externos.

#### utils

Nesta pasta temos várias funções de uso genérico da aplicação que poderiam se repetir diversas vezes pelo código, e para evitar a duplicação de código ficam em arquivo apenas, podendo ser importadas e usadas quando forem necessárias.

Atualmente temos as seguintes funções:

* **delay** *(uma função de setTimeout)*
* **validateTelephone** *(validar seu um número de telefone é válido)*
* **normalizeTelephone** *(padronização de número de telefone para o Brasil Ex. 55119999-9999)*
* **generateHash** *(gerador de hashs aleatórias criptografadas)*
* **convertToBase64** *(conversor para arquivos no encode base64)*

#### routes

Arquivo que registra todas as rotas do sistema, atualmente temos apenas uma rota GET de exemplo usando a controller de exemplo: **ExampleController.** 

```asn
import { Router } from "express";

import ExampleController from './controllers/ExampleController';

const routes = new Router();

routes.get("/", (req, res) => {
  res.send("Boilerplate node - versão 1.0");
});

routes.post("/example", ExampleController.StartMethod);
```

#### app

Arquivo que possui todas as configurações para a base do serviço, e como a porta que irá rodar, importação das rotas e demais e mais o que for de configuração geral.

### Configurações especiais

Adicionei  um gerador que cria os arquivos para desenvolvimento do projeto nos diretórios corretos, com o padrão correto.

#### express

Um framework muito usado por todo o mundo na criação de apis em node, ele é rápido, flexível e minimalista, assim tornando o desenvolvimento mais rápido e prático.

**[Link express](https://www.npmjs.com/package/express)**

### plop

![plop ](assets/img/plop.png "plop")

**[Link plop no github](https://github.com/plopjs/plop)**

### commitizen + husky

Adicionei a combinação de commitizen + husky para criar commits com mensagens concisas e com escopo definido.

só com o commitizen ao digitar **git cz** ele abre essa interface no terminal e ajuda no commit, mas ai vêm o pulo do gato. 

Com o husky você pode criar um hook para sobrescrever o comando **git commit** e assim usar o commitizen por default, inclusive, isso também alimenta o changelog da aplicação.

![commitizen](assets/img/add-commit.png "commitizen")

**[Link husky](https://typicode.github.io/husky/#/)**

**[Link commitizen](https://github.com/commitizen/cz-cli)**

Fiz isso em busca de organizar um projeto, que poderia ser mantido por diversas pessoas, ganhando produtividade e padronização.

### .env

Gerenciar credênciais de acesso são sempre um problema, e não podemos guardar acessos do banco de dados ou api internas, configurações do server etc... no meio do código. Por isso a solução mais provável é utilizar um arquivo só para elas que nunca será commitado, então usei esse pacote.

**[Link .env](https://www.npmjs.com/package/dotenv)**

### axios

Um client para realizar chamadas http, onde com ele é possível realizar chamadas para hosts.

Ele já está configurado para usar um base url vindo da .env, então é só importar para realizar as chamadas **GET, POST, PUT, DELETE.** 

**[Link axios](https://www.npmjs.com/package/axios)**

Assim temos uma configuração básica que pode ser usada para criações de serviço node.

<hr/>

> Caso alguém se interesse, segue o[ link do repositório](https://github.com/Jorge-Bill/boilerplate-node)