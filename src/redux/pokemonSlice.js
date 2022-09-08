import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  selectedPokemon: null
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectPokemon: (state, action) => {
        state.selectedPokemon = action.payload
    },
    listOfPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { selectPokemon, listOfPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
