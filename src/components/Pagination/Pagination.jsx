import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const PaginationStyled = styled.ul`
  li {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border: solid 1px ${colors.periblue};
    border-radius: 4px;
    color: ${colors.periblue};
    font-family: "Poppins";
    text-align: center;
    line-height: 36px;

    /* Avoid text selection */
    user-select: none;

    &.selected {
      background-color: ${colors.periblue};
      color: ${colors.primaryTxt};
    }
    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      cursor: pointer;
      background-color: ${colors.periblue + "BF"}; // opacity 75%
      color: ${colors.primaryTxt};
    }
  }
`;

const Pagination = (props) => {
  const { totalCount, pageSize, currentPage } = props;
  const [page, setPage] = useState(currentPage);
  const [items, setItems] = useState([]);
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const hideItem = totalPageCount > 3;

  const onChangePage = (currentValue) => {
    switch (currentValue) {
      case "<<":
        setPage(1);
        break;
      case "<":
        setPage(page > 1 ? page - 1 : page);
        break;
      case ">":
        setPage(page < totalPageCount ? page + 1 : page);
        break;
      case ">>":
        setPage(totalPageCount);
        break;
      default:
        setPage(currentValue);
        break;
    }
  };

  useEffect(() => {
    console.log("render again");
    if (hideItem) {
      if (page !== 1 && page !== totalPageCount) {
        setItems([page - 1, page, page + 1]);
      } else if (page === 1) {
        setItems([1, 2, 3]);
      } else if (page === totalPageCount) {
        setItems([totalPageCount - 2, totalPageCount - 1, totalPageCount]);
      }
    } else {
      setItems([
        ...Array(totalPageCount)
          .fill()
          .map((_, i) => i + 1),
      ]);
    }
  }, [page, hideItem, totalPageCount]);

  return (
    <PaginationStyled>
      {["<<", "<"].map((item) => (
        <li onClick={() => onChangePage(item)} key={item}>
          {item}
        </li>
      ))}
      {hideItem && page > 2 && <li>•••</li>}
      {[...items].map((item) => {
        return (
          <li
            className={page === item ? "selected" : ""}
            onClick={() => onChangePage(item)}
            key={item}
          >
            {item}
          </li>
        );
      })}
      {hideItem && totalPageCount - page >= 2 && <li>•••</li>}
      {[">", ">>"].map((item) => (
        <li onClick={() => onChangePage(item)} key={item}>
          {item}
        </li>
      ))}
    </PaginationStyled>
  );
};

export default Pagination;
