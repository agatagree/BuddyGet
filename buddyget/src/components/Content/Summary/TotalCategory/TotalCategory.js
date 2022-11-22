import {
  Typography,
  Divider,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledCardTitle } from "../../../../styles/Global.styled";
import {
  StyledCategoryData,
  StyledCategoryContainer,
  StyledCategoryName,
  StyledCategoryLayout,
} from "./TotalCategory.styled";
import { IconMatch } from "../../../../utils/IconMatch";
import { useState } from "react";
import { StyledAccordion } from "../../ContentAll/Content.styled";

export const TotalCategory = ({ list, category }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sumCat = (cat) => {
    let catSum = 0;
    list.forEach((object) => {
      if (cat === object.category) {
        catSum += object.price;
      }
    });
    return catSum;
  };

  const Title = () => {
    return <StyledCardTitle>Total per category</StyledCardTitle>;
  };

  const CategoryContent = () => {
    return (
      <>
        <Divider />
        <StyledCategoryData>
          {category.map((cat, index) => {
            return (
              <StyledCategoryContainer key={index}>
                <StyledCategoryName>
                  <IconMatch cat={cat.label} />
                  <Typography>{cat.label}</Typography>
                </StyledCategoryName>

                <Typography>{sumCat(cat.label)} PLN</Typography>
              </StyledCategoryContainer>
            );
          })}
        </StyledCategoryData>
      </>
    );
  };

  return (
    <>
      <StyledAccordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Title />
        </AccordionSummary>
        <AccordionDetails>
          <CategoryContent />
        </AccordionDetails>
      </StyledAccordion>

      <StyledCategoryLayout>
        <Title />
        <CategoryContent />
      </StyledCategoryLayout>
    </>
  );
};
