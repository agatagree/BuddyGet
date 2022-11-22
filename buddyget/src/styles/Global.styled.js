import { Container, Typography } from "@mui/material";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Catamaran,sans-serif;
}
`;

export const StyledContainer = (props) => (
  <Container
    sx={{
      height: "100vh",
      padding: { xs: 0 },
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
    }}
  >
    {props.children}
  </Container>
);

export const StyledCardTitle = (props) => (
  <Typography
    sx={{
      fontWeight: 600,
      pb: 1,
    }}
  >
    {props.children}
  </Typography>
);
