import { StyledSummary, StyledTitle, StyledTotalPrice } from "./Summary.styled";

export const Summary = ({ list }) => {
  const sum = list.reduce((acc, objects) => {
    return acc + objects.price;
  }, 0);

  return (
    <StyledSummary>
      <StyledTitle>TOTAL EXPENSES</StyledTitle>
      <StyledTotalPrice>{sum} PLN</StyledTotalPrice>
    </StyledSummary>
  );
};
