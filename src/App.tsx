import React, { useState } from "react";
import { Container, Paper, styled, Grid, Button } from "@mui/material";
import { GridOperationButton } from "./GridOperationButton";
import { GridDigitButton } from "./GridDigitButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResultContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  textAlign: "right",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);
  const [prevaValue, setPrevValue] = useState("");

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0" && !currentValue.includes("."))
      return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };
  const clear = () => {
    setCurrentValue("0");
    setOperation("");
    setOverwrite(true);
    setPrevValue("");
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const selectOperation = (operation: string) => {
    if (prevaValue) {
      setCurrentValue(`${calculate()}`);
      setPrevValue(`${calculate()}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  const percent = () => {
    setCurrentValue((parseFloat(currentValue) / 100).toString());
  };

  const minus = () => {
    setCurrentValue((parseFloat(currentValue) * -1).toString());
  };
  const calculate = () => {
    if (!prevaValue || !operation) return currentValue;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevaValue);

    let result;
    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
    }
    return result;
  };

  const equal = () => {
    setCurrentValue(`${calculate()}`);
    setOperation("");
    setOverwrite(true);
    setPrevValue("");
  };

  return (
    <Container maxWidth="xs">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ResultContainer>{currentValue}</ResultContainer>
          </Grid>
          <Grid item container columnSpacing={2}>
            <GridOperationButton
              operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
              backGColor="rgba(153, 153, 255, .5)"
            />
            <GridOperationButton
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <GridOperationButton
              operation={"/"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={2}>
            <GridDigitButton digit={"7"} enterDigit={setDigit} />
            <GridDigitButton digit={"8"} enterDigit={setDigit} />
            <GridDigitButton digit={"9"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>

          <Grid item container columnSpacing={2}>
            <GridDigitButton digit={"4"} enterDigit={setDigit} />
            <GridDigitButton digit={"5"} enterDigit={setDigit} />
            <GridDigitButton digit={"6"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
              opIcon={<RemoveIcon />}
            />
          </Grid>

          <Grid item container columnSpacing={2}>
            <GridDigitButton digit={"1"} enterDigit={setDigit} />
            <GridDigitButton digit={"2"} enterDigit={setDigit} />
            <GridDigitButton digit={"3"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
              opIcon={<AddIcon />}
            />
          </Grid>
          <Grid item container columnSpacing={2}>
            <GridOperationButton
              operation={"+/-"}
              selectOperation={minus}
              selectedOperation={operation}
            />
            <GridDigitButton digit={"0"} enterDigit={setDigit} />
            <GridDigitButton digit={"."} enterDigit={setDigit} />
            <Grid item xs={3}>
              <Button variant="contained" fullWidth onClick={equal}>
                O_O
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
