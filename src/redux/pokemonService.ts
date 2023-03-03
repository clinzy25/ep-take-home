import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPokemon } from 'pokeapi-typescript';
import { Gender } from '../types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`
    }),
    getAllGenders: builder.query<Gender[], void>({
      query: () => '/gender',
      transformResponse: (rawResult: { results: Gender[] }) => rawResult.results
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllGendersQuery } = pokemonApi;
