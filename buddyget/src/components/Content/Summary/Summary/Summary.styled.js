import { Box, Typography } from "@mui/material";

export const StyledSummary = (props) => (
  <Box
    sx={{
      bgcolor: { xs: "transparent", md: "secondary.main" },
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      alignItems: { xs: "center", md: "flex-end" },
      p: 3,
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    }}
  >
    {props.children}
  </Box>
);

export const StyledTitle = (props) => (
  <Typography
    sx={{
      color: "secondary.dark",
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: "600",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledTotalPrice = (props) => (
  <Typography
    sx={{
      textTransform: "uppercase",
      fontSize: "36px",
      fontWeight: "600",
      lineHeight: 1,
    }}
  >
    {props.children}
  </Typography>
);
