<img alt="Dashgo" src="https://repository-images.githubusercontent.com/346402665/17e19380-840e-11eb-86b6-5475e99b6392" />

<h3 align="center">
  Dashgo: Aplicação para cadastro de usuários e visualização de gráficas utilizando um interface UX declarativa
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/denismend/ignite-dashgo?color=%2304D361">

  <img alt="Made by denismend" src="https://img.shields.io/badge/made%20by-denismend-%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="sample" src="https://img.shields.io/github/stars/denismend/ignite-dashgo?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test_tube-executar-os-testes">Executar os testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre a aplicação

O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.

O projeto foi desenvolvido como pratica das aulas do módulo 03 do Ignite da Rocketseat

## :computer: Tecnologias
Este projeto foi construído utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)


## :construction_worker: Como Executar

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/denismend/ignite-dashgo.git
# Entre na pasta do repositório clonado
$ cd ignite-dashgo
```

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie uma copia do arquivo .env.sample
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.sample .env.local

# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev

```


## :test_tube: Executar os testes

```bash
# Instale as dependências caso já não instalou
# Execute os testes
$ yarn test
ou
$ npm run test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by denismend
