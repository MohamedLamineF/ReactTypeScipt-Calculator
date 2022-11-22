import React from "react";
import { Container, Paper, styled, Grid, Card } from "@mui/material";

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
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ResultContainer>0.0</ResultContainer>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
