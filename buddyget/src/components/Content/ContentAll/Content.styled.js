import { Box, Accordion } from "@mui/material";

export const StyledContent = (props) => (
  <Box
    sx={{
      px: { xs: "24px", md: "40px" },
      pb: "80px",
      pt: { xs: "24px", md: "80px" },
      bgcolor: {xs:"secondary.light", md:"transparent"},
      flex: "1",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "1440px",
      gap: {xs:3,md:0},
    }}
  >
    {props.children}
  </Box>
);

export const StyledMainInfo = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column-reverse", md: "row" },
      gap: 3,
    }}
  >
    {props.children}
  </Box>
);

export const StyledContentLeft = (props) => (
  <Box
    sx={{
      width: { xs: "100%", md: "66%" },
    }}
  >
    {props.children}
  </Box>
);

export const StyledContentRight = (props) => (
  <Box
    sx={{
      width: { xs: "100%", md: "34%" },
    }}
  >
    {props.children}
  </Box>
);

export const StyledAccordion = (props) => (
  <Accordion
    sx={{
      display: { md: "none" },
    }}
  >
    {props.children}
  </Accordion>
);
