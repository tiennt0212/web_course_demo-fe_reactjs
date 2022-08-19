import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";

const FooterStyled = styled.footer`
  margin-top: auto; /* Place the footer at the bottom when the MainLayout is flex column*/
  /* height: 72px; */
  width: 100%;
  /* border: solid 1px blue; */
  a {
    text-decoration: none;
    color: inherit;
  }

  .body {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    section {
      &:first-child {
        flex-basis: 50%;
        font-weight: 500;
        h2 {
          font-size: 40px;
          margin-bottom: 12px;
        }
        p {
          font-size: 16px;
          margin-bottom: 8px;
        }
        li {
          display: inline-block;
          margin-right: 14px;
          img {
            width: 28px;
          }
        }
      }
      &:not(:first-child) {
        h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        a {
          font-size: 16px;
          font-weight: 400;
        }
        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            margin-bottom: 4px;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 20px;
    color: ${colors.tertiaryTxt};
    p {
      display: inline-block;
    }
    span {
      a {
        &:first-child {
          padding-right: 20px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="body">
        <section>
          <h2>DeveStore</h2>
          <p>Amazing NFTs marketplace, authentic and unique digital creation</p>
          <ul>
            <li>
              <img src={iconFacebook} />
            </li>
            <li>
              <img src={iconYoutube} />
            </li>
            <li>
              <img src={iconTwitter} />
            </li>
          </ul>
        </section>
        <section>
          <h4>Marketplace</h4>
          <ul>
            <li>
              <Link to="#">Explore</Link>
            </li>
            <li>
              <Link to="#">NFTs</Link>
            </li>
            <li>
              <Link to="#">Collectibles</Link>
            </li>
            <li>
              <Link to="#">Virtual Reality</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">Partners</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Newsletter</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="footer">
        <p>Copyright 20022 Devera. All right reserved</p>
        <span>
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Terms & Conditions</Link>
        </span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
