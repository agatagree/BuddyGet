import { Box } from "@mui/material";

export const StyledFilter = (props) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      mb: 2,
    }}
  >
    {props.children}
  </Box>
);

export const StyledFilterItem = (props) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "nowrap",
      gap: { xs: 1, md: 2 },
      flexGrow: 1,
      flex: 1,
    }}
  >
    {props.children}
  </Box>
);
