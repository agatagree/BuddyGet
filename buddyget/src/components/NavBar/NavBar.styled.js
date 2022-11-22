import { Container, AppBar, Typography, Box } from "@mui/material";

export const StyledBar = (props) => (
  <AppBar
    elevation={0}
    position="static"
    sx={{
      bgcolor: "transparent",
      width: "100%",
      maxWidth: "1440px",
    }}
  >
    {props.children}
  </AppBar>
);

export const StyledBarContiner = (props) => (
  <Container
    sx={{
      p: { xs: "24px", md: "40px" },
    }}
  >
    {props.children}
  </Container>
);

export const StyledLogoBig = (props) => (
  <Typography
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontSize: "30px",
      fontWeight: 900,
      letterSpacing: ".1rem",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledLogoSmall = (props) => (
  <Typography
    variant="h6"
    noWrap
    component="a"
    href=""
    sx={{
      display: { xs: "flex", md: "none" },
      flexGrow: 1,
      fontWeight: 900,
      letterSpacing: ".1rem",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledNav = (props) => (
  <Box
    sx={{
      flexGrow: 1,
      justifyContent: "flex-end",
      alignContent: "center",
      display: { xs: "none", md: "flex" },
      mr: "40px",
    }}
  >
    {props.children}
  </Box>
);
