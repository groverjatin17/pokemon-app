import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserDetails from "./pages/userDetails";
import HorizontalLinearStepper from "./components/stepper";
import { listOfPokemons } from "./redux/pokemonSlice";
import BasicTable from "./pages/pokemonCombobox";
import ReviewBoard from "./pages/reviewBoard";

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch();
  const pokemonArray = [];

  async function fetchPokemons(url) {
    const res = await fetch(url);
    const data = await res.json();
    pokemonArray.push(...data.results);

    if (data.next) {
      fetchPokemons(data.next);
    } else {
      dispatch(listOfPokemons([...pokemonArray]));
    }
  }

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=20");
  }, []);

  const stepsAndPages = {
    0: <UserDetails />,
    1: <BasicTable />,
    2: <ReviewBoard setActiveStep={setActiveStep} />,
  };

  return (
    <>
      <div style={{ width: "60%", margin: "auto", marginTop: "60px" }}>
        <HorizontalLinearStepper
          stepsAndPages={stepsAndPages}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </>
  );
}
