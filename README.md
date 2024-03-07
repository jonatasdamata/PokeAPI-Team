# API de Times de Pokémon
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/jonatasdamata/PokeAPI-Team-Desafio/blob/master/LICENSE)  <br/>
Este repositório contém uma API desenvolvida para criar e gerenciar times de Pokémon. <br/>
Trata-se de um desafio técnico proposto pela Triágil como parte do processo de seleção para a vaga de estágio.

## Descrição do Desafio

O objetivo deste desafio é criar uma API capaz de montar times de Pokémon a partir de uma lista fornecida pelo usuário, utilizando a PokeAPI. O usuário deve ser capaz de gerar um novo time, passando uma lista de Pokémon e um nome de usuário. A API deve validar os Pokémon fornecidos, buscar os dados na PokeAPI e salvar o time. Além disso, deve fornecer rotas para listar todos os times registrados, buscar um time pelo usuário e criar um novo time.


## Requisitos
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

## Instalação e Uso

### Opção 1: Instalação via npm
1. Clone o repositório:
```bash
git clone https://github.com/jonatasdamata/PokeAPI-Team-Desafio.git
```

2. Instale as dependências do projeto:
```bash
cd PokeAPI-Team-Desafio
npm install
```

3. Inicie o servidor:
```bash
npm start
```
O servidor será iniciado na porta padrão 3000. Você pode acessar a API em http://localhost:3000. <br/> 

Observações: <br/>
• Certifique-se de ter o Node.js e o npm instalados em seu sistema. <br/>
• As dependências do projeto incluem Express, Mongoose, Nodemon, Axios e BSON. O comando npm install instalará todas essas dependências para você.

### Opção 2: Uso do Docker
#### 1. Clone o repositório:
```bash
git clone https://github.com/jonatasdamata/PokeAPI-Team-Desafio.git
```
#### 2. Certifique-se de ter o Docker instalado em seu sistema.

#### 3. Construa a imagem Docker:
```bash
cd PokeAPI-Team-Desafio
docker-compose build
```
#### 4. Inicie o contêiner Docker:
```bash
docker-compose up -d
```

O contêiner Docker será iniciado e a API estará disponível na porta padrão 3000. Você pode acessá-la em http://localhost:3000. <br/>

Observações: <br/>
• O Dockerfile e o arquivo docker-compose.yml fornecidos no repositório são configurados para criar um ambiente de contêiner com todas as dependências necessárias para executar a aplicação. <br/>
• O Docker permite que você execute a aplicação em qualquer ambiente compatível com Docker, sem se preocupar com as dependências específicas do sistema operacional ou configurações de ambiente.

## Testando a API com o Postman

O Postman é uma ferramenta amplamente utilizada para testar APIs RESTful. <br/> 
Aqui estão as instruções sobre como testar a API de Times de Pokémon utilizando o Postman:

### 1. Instalação do Postman:

Se você ainda não tiver o Postman instalado, você pode baixá-lo e instalá-lo a partir do site oficial: Postman Download.

### 2. Importando a coleção do Postman:

Você pode importar a coleção do Postman pré-configurada para este projeto. Para fazer isso, siga os passos abaixo: <br/>

• Faça o download do arquivo de coleção do Postman fornecido no repositório. <br/>
• Abra o Postman e clique em "Import" no canto superior esquerdo. <br/>
• Selecione o arquivo da coleção que você baixou. <br/> 
• A coleção será importada para o Postman e estará disponível na barra lateral esquerda.

### 3. Testando as Rotas da API:

Com a coleção importada, você terá acesso às seguintes requisições pré-configuradas: <br/>

• Criar Time de Pokémon: Esta requisição permite que você crie um novo time de Pokémon, fornecendo um nome de usuário e uma lista de Pokémon. Certifique-se de preencher os campos corretamente antes de enviar a requisição.
#### Input:
```bash
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
<br/>
<br/>

• Buscar Time por Usuário: Esta requisição permite buscar um time específico pelo nome de usuário.
#### Output /api/teams/{user}:
```bash
{
  "owner": "sleao",
  "pokemons": [
    {
      "id": 9,
      "name": "blastoise",
      "weight": 855,
      "height": 16
    },
    {
      "id": 25,
      "name": "pikachu",
      "weight": 60,
      "height": 4
    }
  ]
}
```
<br/>
<br/>

• Listar Todos os Times: Esta requisição lista todos os times registrados na API.
#### Output /api/teams
```bash
{
  "1": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      }
    ]
  },
  "2": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      },
      {
        "id": 3,
        "name": "venusaur",
        "weight": 1000,
        "height": 20
      },
      {
        "id": 6,
        "name": "charizard",
        "weight": 905,
        "height": 17
      },
      {
        "id": 131,
        "name": "lapras",
        "weight": 2200,
        "height": 25
      },
      {
        "id": 54,
        "name": "psyduck",
        "weight": 196,
        "height": 8
      }
    ]
  }
}
```

 Certifique-se de ajustar os parâmetros conforme necessário para as suas necessidades de teste.

### 4. Enviando Requisições:
Após preencher os dados necessários em cada requisição, você pode clicar no botão "Send" para enviá-la para o servidor. O Postman exibirá a resposta da API, incluindo qualquer dado retornado ou mensagens de erro.


## Autor

Jonatas da Mata

https://www.linkedin.com/in/jonatasdamatadev/


## Agradecimentos

Gostaria de expressar minha sincera gratidão à equipe da Triágil por me conceder a oportunidade de participar do processo seletivo para a vaga de estágio. Agradeço pelo desafio proposto e pela oportunidade de demonstrar minhas habilidades e conhecimentos. Estou ansioso para contribuir positivamente com a equipe e aprender com os profissionais talentosos da Triágil. Muito obrigado!
