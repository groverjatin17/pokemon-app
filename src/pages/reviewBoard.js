import React from "react";
import { useSelector } from "react-redux";
import { AccountProfile } from "../components/account-profile";
import { Box, Container, Grid, Typography } from "@mui/material";
import PokemonThumb from "../components/PokemonThumb";
import logo from "../styles/img/qq.png";

export default function ReviewBoard({ setActiveStep }) {
  const { selectedPokemon } = useSelector((state) => state.pokemonData);
  const {
    userDetails: { values },
  } = useSelector((state) => state.myForm);

  return (
    <>
      <div className="parentContainer">
        <div className="container">
          {Object.keys(values).map((key) => (
            <div className="main" key={key}>
              <div className="ticket">
                <div className="ticket__main">
                  <img src={logo} alt="QQ" className="avatar" />
                  <div className="ticket__content">
                    <h3 className="title">{key}</h3>
                    <p className="code">{values[key]}</p>
                  </div>
                </div>
                <div className="ticket__copy">
                  <button
                    style={{ float: "right", marginRight: "10px" }}
                    className="button-42"
                    onClick={() => setActiveStep(0)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {selectedPokemon ? (
            <PokemonThumb
              id={selectedPokemon.id}
              image={selectedPokemon.sprites.other.dream_world.front_default}
              name={selectedPokemon.name}
              type={selectedPokemon.types[0].type.name}
              editMode
              setActiveStep={setActiveStep}
            />
          ) : (
            <h2 style={{color: "white"}}> Kindly select a Pokemon to proceed</h2>
          )}
        </div>
      </div>

      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
            <AccountProfile user={values} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <PokemonThumb
                id={selectedPokemon.id}
                image={selectedPokemon.sprites.other.dream_world.front_default}
                name={selectedPokemon.name}
                type={selectedPokemon.types[0].type.name}
              />
            </Grid>
          </Grid>
        </Container>
      </Box> */}
    </>
  );
}
