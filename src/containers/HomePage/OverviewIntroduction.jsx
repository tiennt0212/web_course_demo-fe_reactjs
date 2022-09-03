import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../components";
import { colors } from "../../styles/colors";
import deveraCharacter from "../../assets/images/devera-character.svg";
const OverviewIntroductionStyled = styled.section`
  display: flex;
  .left {
    flex-basis: 50%;
    h1 {
      font-size: 60px;
      font-weight: 700;
    }
    p {
      font-family: "Poppins";
      font-size: 13px;
      font-weight: 500;
    }
  }
  .right {
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }
`;

const OverviewIntroduction = (props) => {
  const { totalNFT, totalCreator } = props;
  return (
    <OverviewIntroductionStyled>
      <div className="left">
        <h1>Discover, Sell & Collect rare NFTs</h1>
        <p>
          Digital marketplace for crypto collections and non-fungible tokens
          (NFTs)
        </p>
        <Button bgColor={colors.periblue}>Discover Now</Button>
        <div className="data">
          {totalNFT} {totalCreator}
        </div>
      </div>
      <div className="right">
        <img src={deveraCharacter} alt="devera-character" />
      </div>
    </OverviewIntroductionStyled>
  );
};

OverviewIntroduction.propTypes = {
  totalNFT: PropTypes.number,
  totalCreator: PropTypes.number,
};

OverviewIntroduction.defaultProps = {
  totalNFT: 123456,
  totalCreator: 123,
};

export default OverviewIntroduction;
