import Input from "./Input";
import styled from "styled-components";
import iconMagnify from "../../assets/images/icon-magnifying.svg";
import { colors } from "../../styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border: solid 1px ${colors.secondaryTxt};
  border-radius: 4px;

  input {
    border: none;
  }

  img {
    width: 16px;
    padding-right: 8px;
  }
`;

const SearchBar = (props) => {
  return (
    <Wrapper>
      <Input type="search" />
      <img src={iconMagnify} alt={"search-icon"} />
    </Wrapper>
  );
};

export default SearchBar;
