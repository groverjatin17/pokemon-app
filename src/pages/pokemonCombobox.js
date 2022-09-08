import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { selectPokemon } from "../redux/pokemonSlice";
import PokemonThumb from "../components/PokemonThumb";

export default function ComboBox() {
  const dispatch = useDispatch();
  const { pokemons, selectedPokemon } = useSelector(
    (state) => state.pokemonData
  );
  const formatPokemons = pokemons.map((item) => ({
    ...item,
    label: item.name,
  }));

  const onChangeHandler = async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();

    dispatch(selectPokemon(data));
  };

  return (
    <div style={{marginTop: '20px'}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={formatPokemons}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Pokemon" />
        )}
        onChange={(e, selectedPokemon) => onChangeHandler(selectedPokemon)}
      />
      <br />
      {selectedPokemon ? (
        <PokemonThumb
          id={selectedPokemon.id}
          image={selectedPokemon.sprites.other.dream_world.front_default}
          name={selectedPokemon.name}
          type={selectedPokemon.types[0].type.name}
        />
      ) : (
        <h1 style={{ textAlign: "center", color: "#f0a500" }}>Kindly Select a Pokemon</h1>
      )}
    </div>
  );
}
