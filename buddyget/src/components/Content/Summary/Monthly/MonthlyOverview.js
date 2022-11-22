import { Divider, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  StyledData,
  MakeBar,
  StyledMonth,
  StyledBarContainer,
  StyledInfo,
  StyledInfoText,
  StyledMonthlyLayout,
} from "./MonthlyOverview.styled";
import { useState } from "react";
import { StyledCardTitle } from "../../../../styles/Global.styled";
import { StyledAccordion } from "../../ContentAll/Content.styled";

export const MonthlyOverview = ({ list }) => {
  const [showExpenses, setShowExpenses] = useState(false);
  const [value, setValue] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMouseEnter = (index) => {
    setShowExpenses(true);
    setValue(labelValues[index]);
  };

  const handleMouseOut = () => {
    setShowExpenses(false);
  };

  const labelValues = list.reduce((acc, curr) => {
    const idx = Number(curr.date.split("-")[1]) - 1;
    acc[idx] += curr.price;
    return acc;
  }, new Array(12).fill(0));

  const Title = () => {
    return <StyledCardTitle>Total per month</StyledCardTitle>;
  };

  const MonthlyContent = () => {
    return (
      <>
        <Divider />
        <StyledInfo>
          {" "}
          {showExpenses && (
            <StyledInfoText>Expenses: {value} PLN</StyledInfoText>
          )}
        </StyledInfo>

        <StyledData>
          {labelValues.map((month, index) => {
            return (
              <StyledBarContainer key={index}>
                <MakeBar
                  height={month / 3}
                  sx={{ bgcolor: "primary.main" }}
                  onMouseOver={() => handleMouseEnter(index)}
                  onMouseOut={handleMouseOut}
                />
                <StyledMonth>{index + 1}</StyledMonth>
              </StyledBarContainer>
            );
          })}
        </StyledData>
      </>
    );
  };

  return (
    <>
      <StyledAccordion
        expanded={expanded === "pane2"}
        onChange={handleChange("pane2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Title />
        </AccordionSummary>
        <AccordionDetails>
          <MonthlyContent />
        </AccordionDetails>
      </StyledAccordion>

      <StyledMonthlyLayout>
        <Title />
        <MonthlyContent />
      </StyledMonthlyLayout>
    </>
  );
};
