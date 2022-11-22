import { Box, Typography } from "@mui/material";

export const StyledFooter = (props) => (
  <Box
    sx={{
      bgcolor: "primary.contrastText",
      color: "secondary.light",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {props.children}
  </Box>
);

export const StyledFooterContent = (props) => (
  <Box
    sx={{
      maxWidth: "1440px",
      px: { xs: "24px", md: "40px" },
      pt: { xs: "40px", md: "80px" },
      width: "100%",
    }}
  >
    {props.children}
  </Box>
);

export const StyledFooterText = (props) => (
  <Typography
    sx={{
      fontSize: "30px",
      fontWeight: 900,
      mb: "4px",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledMail = (props) => (
  <Typography
    component="a"
    href="mailto: kontakt@parleto.io"
    sx={{
      fontSize: "22px",
      textDecoration: "none",
      color: "secondary.light",
      alignSelf: "center",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledFooterLaw = (props) => (
  <Box
    sx={{
      py: "16px",
      mt: "32px",
      borderTop: 1,
      borderColor: "hsla(0,0%,100%,.2)",
    }}
  >
    {props.children}
  </Box>
);

export const StyledFooterLawText = (props) => (
  <Typography
    sx={{
      fontSize: "12px",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledFooterLinks = (props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
    }}
  >
    {props.children}
  </Box>
);
