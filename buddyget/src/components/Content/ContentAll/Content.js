import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  StyledContent,
  StyledMainInfo,
  StyledContentLeft,
  StyledContentRight,
} from "./Content.styled";
import { Filter } from "../Filter/FilterAll/Filter";
import { OverviewTable } from "../Filter/OverviewTable";
import { EXPENSES } from "../../../utils/Expenses";
import { SearchBar } from "../Filter/SearchBar";
import { Summary } from "../Summary/Summary/Summary";
import { TotalCategory } from "../Summary/TotalCategory/TotalCategory";
import { MonthlyOverview } from "../Summary/Monthly/MonthlyOverview";

export const Content = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const category = [
    { checked: false, label: "food" },
    { checked: false, label: "car" },
  ];

  const [list, setList] = useState(EXPENSES);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [categorySelected, setCategorySelected] = useState([]);

  const handleChangeChecked = (categoryName) => {
    setCategorySelected(categoryName);
  };

  const handleStart = (start) => {
    setStartDate(dayjs(start).format("YYYY-MM-DD"));
  };

  const handleEnd = (end) => {
    setEndDate(dayjs(end).format("YYYY-MM-DD"));
  };

  const applyFilters = () => {
    let updatedList = EXPENSES;

    if (startDate) {
      updatedList = updatedList.filter((item) => {
        return item.date >= startDate;
      });
    }

    if (endDate) {
      updatedList = updatedList.filter((item) => {
        return item.date <= endDate;
      });
    }

    if (categorySelected.length) {
      updatedList = updatedList.filter((item) =>
        categorySelected.includes(item.category)
      );
    }

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput, categorySelected, startDate, endDate]);

  return (
    <StyledContent>
      <StyledMainInfo>
        <StyledContentLeft>
          <Filter
            selectedCategory={handleChangeChecked}
            category={category}
            start={handleStart}
            end={handleEnd}
          />
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
        </StyledContentLeft>
        <StyledContentRight>
          <Summary list={list} />
        </StyledContentRight>
      </StyledMainInfo>

      <StyledMainInfo>
        <StyledContentLeft>
          {resultsFound ? <OverviewTable list={list} /> : "empty list"}
        </StyledContentLeft>
        <StyledContentRight>
          <TotalCategory list={list} category={category} />
          <MonthlyOverview list={list} />
        </StyledContentRight>
      </StyledMainInfo>
    </StyledContent>
  );
};
