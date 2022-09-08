import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  selectedPokemon: null
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // pokemon: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   state.count -= 1
    // },
    selectPokemon: (state, action) => {
        state.selectedPokemon = action.payload
    },
    listOfPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectPokemon, listOfPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
