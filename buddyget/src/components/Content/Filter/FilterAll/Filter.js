import { CategorySelect } from "../CategorySelect";
import { DateFrom } from "../DateFrom";
import { DateTo } from "../DateTo";
import { StyledFilter, StyledFilterItem } from "./Filter.styled";

export const Filter = ({ selectedCategory, category, start, end }) => {
  return (
    <>
      <StyledFilter>
        <StyledFilterItem>
          <DateFrom start={start} />
          <DateTo end={end} />
        </StyledFilterItem>
        <CategorySelect
          selectedCategory={selectedCategory}
          category={category}
        />
      </StyledFilter>
    </>
  );
};
