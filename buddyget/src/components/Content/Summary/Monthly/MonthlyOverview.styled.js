import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledMonthlyLayout = (props) => (
  <Box
    sx={{
      p: 3,
      width: "100%",
      minHeight: "190px",
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      justifyContent: "flex-end",
      bgcolor: "secondary.main",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    }}
  >
    {props.children}
  </Box>
);

export const StyledMonthlyOverview = (props) => (
  <Box
    sx={{
      m: "0px auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      bgcolor: "secondary.main",
    }}
  >
    {props.children}
  </Box>
);

export const StyledData = (props) => (
  <Box
    sx={{
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "space-between",
    }}
  >
    {props.children}
  </Box>
);

export const StyledBarContainer = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "190px",
      width: "100%",
    }}
  >
    {props.children}
  </Box>
);

export const MakeBar = styled(Box)`
  height: ${(props) => props.height}%;
  margin-top: 10px;
  width: 70%;
  &:hover {
    opacity: 0.5;
  }
`;

export const StyledMonth = (props) => (
  <Typography
    sx={{
      textAlign: "center",
      fontSize: "12px",
    }}
  >
    {props.children}
  </Typography>
);

export const StyledInfo = (props) => (
  <Box
    sx={{
      width: "100%",
      minHeight: "32px",
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    {props.children}
  </Box>
);

export const StyledInfoText = (props) => (
  <Typography
    sx={{
      color: "primary.main",
      fontWeight: 800,
      fontSize: "16px",
      pt: 1,
    }}
  >
    {props.children}
  </Typography>
);
