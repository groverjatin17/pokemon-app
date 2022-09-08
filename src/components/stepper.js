import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const steps = ["Enter User Details", "Select a Pokemon", "Review your options"];

export default function HorizontalLinearStepper({
  stepsAndPages,
  activeStep,
  setActiveStep,
}) {
  // const [activeStep, setActiveStep] = React.useState(0);
  const [bookmarked, setBookmarked] = React.useState(new Set());

  const { selectedPokemon } = useSelector((state) => state.pokemonData);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepBookmarked = (step) => {
    return bookmarked.has(step);
  };

  const handleNext = () => {
    let newBookmarked = bookmarked;

    if (isStepBookmarked(activeStep)) {
      newBookmarked = new Set(newBookmarked.values());
      newBookmarked.delete(activeStep);
    }

    if (activeStep === 1 && selectedPokemon === null) {
      alert("Kindly select a Pokemon or bookmark this step for later")
      return;
    }

    if (activeStep === 2 && selectedPokemon === null) {
      alert("Kindly fill all the bookmarked tabs to proceed")
      return;
    }
    
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
    setBookmarked(newBookmarked);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBookmark = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't bookmark a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setBookmarked((prevBookmarked) => {
      const newBookmarked = new Set(prevBookmarked.values());
      newBookmarked.add(activeStep);
      return newBookmarked;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          {
            /* if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          } */
          }
          if (isStepBookmarked(index)) {
            stepProps.completed = false;
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {stepsAndPages[activeStep]}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleBookmark} sx={{ mr: 1 }}>
                Bookmark
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
