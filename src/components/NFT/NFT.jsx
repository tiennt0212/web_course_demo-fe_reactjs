import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { API_ENDPOINT } from "../../utils/constant";
import iconICX from "../../assets/images/icon-icx.svg";
import anonymousAvatar from "../../assets/images/anonymous-avatar.svg";

const NFTStyled = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  width: 280px;
  background-color: ${colors.secondaryBg};
  border-radius: 5px;
  padding: 0 30px 12px;
  .nft-img {
    max-width: 220px;
    height: 220px;
    align-self: center;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    h6 {
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      b {
        font-weight: 700;
      }
    }
    img {
      width: 28px;
      border-radius: 14px;
      border: solid 1px ${colors.secondaryTxt};
    }
  }
  .sale {
    .price {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        margin-right: 4px;
      }
      p {
        display: inline-block;
        font-family: "DM Mono";
        font-size: 10px;
      }
    }
  }
`;

const NFT = (props) => {
  const { nftImage, name, author, authorAvatar, price } = props;
  return (
    <NFTStyled>
      <img
        className="nft-img"
        src={`${API_ENDPOINT}${nftImage}`}
        alt="nft-img"
      />
      <div className="info">
        <div className="col">
          <h6>{name}</h6>
          <p>
            Created by <b>{author}</b>
          </p>
        </div>
        <img
          src={
            authorAvatar ? `${API_ENDPOINT}${authorAvatar}` : anonymousAvatar
          }
          alt="author-avatar"
        />
      </div>
      <div className="sale">
        <div className="price">
          <img src={iconICX} alt="icon-icx" />
          <p>{price} ICX</p>
        </div>
      </div>
    </NFTStyled>
  );
};

// NFT.propTypes = {
//   authorAvatar: PropTypes.string,
// };

// NFT.defaultProps = {
//   authorAvatar: anonymousAvatar,
// };

export default NFT;
