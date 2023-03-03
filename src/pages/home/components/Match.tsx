import React from 'react';
import type { IPokemon } from 'pokeapi-typescript';

interface Props {
  pokemonName: string | undefined;
}

const Match = ({ pokemonName }: Props) => {
  return <div>{pokemonName}</div>;
};

export default Match;
