# API de Times de Pokémon
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/jonatasdamata/PokeAPI-Team-Desafio/blob/master/LICENSE)  <br/>
Este repositório contém uma API desenvolvida para criar e gerenciar times de Pokémon. <br/>
Trata-se de um desafio técnico proposto pela Triágil como parte do processo de seleção para a vaga de estágio.

## Descrição do Desafio

O objetivo deste desafio é criar uma API capaz de montar times de Pokémon a partir de uma lista fornecida pelo usuário, utilizando a PokeAPI. O usuário deve ser capaz de gerar um novo time, passando uma lista de Pokémon e um nome de usuário. A API deve validar os Pokémon fornecidos, buscar os dados na PokeAPI e salvar o time. Além disso, deve fornecer rotas para listar todos os times registrados, buscar um time pelo usuário e criar um novo time.


## Requesitos
### Rotas

• GET /api/teams: Lista todos os times registrados. <br/>
• GET /api/teams/{user}: Busca um time registrado pelo nome de usuário. <br/>
• POST /api/teams: Cria um novo time a partir de um JSON fornecido pelo usuário.

### Input do JSON para criação de time
```bash
{
  "user": "nome_de_usuario",
  "team": ["pokemon1", "pokemon2", ...]
}
```
### Output do JSON
```bash
{
  "owner": "nome_de_usuario",
  "pokemons": [
    {
      "id": ID_do_Pokémon,
      "name": "nome_do_Pokémon",
      "weight": peso_do_Pokémon,
      "height": altura_do_Pokémon
    },
    ...
  ]
}
```

## Tecnologias Utilizadas: 
• Node.js <br/>
• MongoDB <br/>
• Docker

## Instalação (Como executar o projeto)
```bash
git clone https://github.com/jonatasdamata/PokeAPI-Team-Desafio.git
```

```bash
npm install
```

```bash
npm start
```

## Exemplos de Uso ao realizar os Testes:

### Criar um novo time:
```bash
POST /api/teams

{
  "user": "sleao",
  "team": [
    "blastoise",
    "pikachu",
    "charizard",
    "venusaur",
    "lapras",
    "dragonite"
  ]
}
```
### Buscar todos os times:
```bash
GET /api/teams
```
### Buscar um time por usuário:
```bash
GET /api/teams/sleao
```


# Autor

Jonatas da Mata

https://www.linkedin.com/in/jonatasdamatadev/
