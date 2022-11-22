import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Content } from "./components/Content/ContentAll/Content";
import { StyledContainer } from "./styles/Global.styled";
import { GlobalStyle } from "./styles/Global.styled";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      md: 768,
    },
  },
  typography: {
    fontFamily: "Catamaran,sans-serif",
    fontSize: 16,
    color: "primary.contrastText",
  },
  palette: {
    primary: {
      main: "#00DDC2",
      light: "#EEFEFE",
      contrastText: "#1B1B1B",
    },
    secondary: {
      main: "#F2F2F2",
      light: "#F9F9F9",
      dark: "#959595",
    },
    icons: {
      typeOne: "#FF6F61",
      typeTwo: "#2F25A1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <NavBar />
        <Content />
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
