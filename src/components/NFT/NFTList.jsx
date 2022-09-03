import React from "react";
import styled from "styled-components";
import NFT from "./NFT";

const NFTListStyled = styled.ul``;

const NFTList = (props) => {
  const { nfts } = props;

  return (
    <NFTListStyled>
      {nfts.map((nft, index) => {
        const { name, price, created_by: author, image } = nft;
        return (
          <NFT
            nftImage={image?.url || null}
            name={name}
            author={`${author.firstname} ${author.lastname}`}
            authorAvatar={
              author?.avatar?.formats?.small?.url ||
              author?.avatar?.formats?.thumbnail?.url
            }
            price={price}
            key={index}
          />
        );
      })}
    </NFTListStyled>
  );
};

export default NFTList;
