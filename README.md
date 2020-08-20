
# PokéStore

![CI](https://github.com/jarioneto/pokestore/workflows/CI/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/812d6c51-d7d8-4e13-951e-4088312f5f84/deploy-status)](https://app.netlify.com/sites/pokestore-b2w/deploys)
![react](https://img.shields.io/github/package-json/dependency-version/jarioneto/pokestore/react)
![typescript](https://img.shields.io/github/package-json/dependency-version/jarioneto/pokestore/typescript)

Aplicação desenvolvida para consumo da API [PokeApi](https://pokeapi.co/)

Foram criadas 3 lojas:
* [Fire](https://pokestore-b2w.netlify.app/)
* [Water](https://pokestore-b2w.netlify.app/#/water)
* [Dragon](https://pokestore-b2w.netlify.app/#/dragon)

Stack utilizada no desenvolvimento:
* TypeScript
* React
* Styled-components
* Jest
* React Testing Library
* ESlint
* Prettier
* Continuos Integration
  * Github Actions (**build, lint, coverage**)

# Configuração inicial

Execute os passos abaixo para realizar a configuração inicial da aplicação.


### 1 - Variáveis de ambiente

Crie uma cópia do arquivo .env.example e e renomeie para .env

```bash
cp .env.example .env
```

Edite o arquivo criado no passo anterior e informe a URL da API

```bash
REACT_APP_API_URL=https://pokeapi.co/api/v2
REACT_APP_POKEMON_ASSETS=https://assets.pokemon.com/assets/cms2/img/pokedex/full/
```


### 2 - Instalação das dependências

Para instalar as dependências da aplicação execute o comando abaixo:

```bash
yarn
```

# Scripts disponíveis

### Execução em modo de desenvolvimento

```bash
yarn start
```

### Executar linter do código

```bash
yarn lint
```

### Criar build de produção

```bash
yarn build
```

### Executar testes

```bash
yarn test
```

### Verificar cobertura do código

```bash
yarn coverage
```

