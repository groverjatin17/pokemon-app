import { configureStore } from '@reduxjs/toolkit'
import myForm from './reduxForm';
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
  reducer: {
      myForm: myForm,
      pokemonData: pokemonReducer
  },
})