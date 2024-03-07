import axios from "axios";
import Team from "../models/Team.js";

// Criar Times
async function createTeam(request, response) {
  const { user, team } = request.body;

  try {
    // Validar se a lista de pokémons está presente e não está vazia
    if (!team || team.length === 0) {
      return response.status(400).json({ error: "Lista de pokémons vazia" });
    }

    // Verificar se cada pokémon na lista é válido e buscar suas informações na PokeAPI
    const pokemonDetailsPromises = team.map(async (pokemonName) => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const { id, height, weight } = response.data;
        return { name: pokemonName, id, height, weight };
      } catch (error) {
        throw new Error(`Erro ao buscar informações do pokémon ${pokemonName}`);
      }
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    // Mapear apenas os nomes dos pokémons
    const pokemonNames = pokemonDetails.map((pokemon) => pokemon.name);

    // Criar o novo time com os detalhes dos pokémons
    const newTeam = await Team.create({
      user,
      team: pokemonDetails.map((pokemon) => pokemon.name),
    });

    return response.status(201).json({
      user,
      team: pokemonDetails.map((pokemon) => pokemon.name),
    });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}

// Buscar Times por Usuário
async function getTeamByUser(request, response) {
  const { user } = request.params;

  try {
    const team = await Team.findOne({ user });

    if (!team) {
      return response.status(404).json({ error: "Time não encontrado" });
    }

    // Buscar detalhes de cada pokémon na equipe
    const pokemonDetailsPromises = team.team.map(async (pokemonName) => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const { id, height, weight } = response.data;
        return { id, name: pokemonName, weight, height };
      } catch (error) {
        throw new Error(`Erro ao buscar informações do pokémon ${pokemonName}`);
      }
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    const formattedResponse = {
      owner: user,
      pokemons: pokemonDetails,
    };

    return response.json(formattedResponse);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}

//Buscar todos os Times
async function listTeams(request, response) {
  try {
    const teams = await Team.find();
    const formattedTeams = {};

    for (let index = 0; index < teams.length; index++) {
      const team = teams[index];
      const formattedPokemons = await Promise.all(
        team.team.map(async (pokemonName) => {
          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            const { id, height, weight } = response.data;
            return {
              id,
              name: pokemonName,
              weight,
              height,
            };
          } catch (error) {
            throw new Error(
              `Erro ao buscar informações do pokémon ${pokemonName}`
            );
          }
        })
      );

      formattedTeams[index + 1] = {
        owner: team.user,
        pokemons: formattedPokemons,
      };
    }

    return response.json(formattedTeams);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}

export { createTeam, listTeams, getTeamByUser };
