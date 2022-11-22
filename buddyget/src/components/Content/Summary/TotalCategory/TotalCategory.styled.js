import { Box } from "@mui/material";

export const StyledCategoryLayout = (props) => (
  <Box
    sx={{
      p: 3,
      width: "100%",
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      bgcolor: "secondary.main",
    }}
  >
    {props.children}
  </Box>
);

export const StyledTotalCategory = (props) => (
  <Box
    sx={{
      bgcolor: "secondary.main",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
      p: 3,
    }}
  >
    {props.children}
  </Box>
);

export const StyledCategoryData = (props) => (
  <Box
    sx={{
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "column",
    }}
  >
    {props.children}
  </Box>
);

export const StyledCategoryContainer = (props) => (
  <Box
    sx={{
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "space-between",
      pt: 2,
    }}
  >
    {props.children}
  </Box>
);

export const StyledCategoryName = (props) => (
  <Box
    sx={{
      display: "flex",
      gap: 1,
    }}
  >
    {props.children}
  </Box>
);
