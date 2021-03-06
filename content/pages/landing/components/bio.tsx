import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import styled from "@emotion/styled";
import Img from "gatsby-image";

const BioWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.articleText};

  * {
    font-size: 1.6rem !important;
  }
  p {
    margin-bottom: 2rem;
    max-width: calc(100% - 4rem);
  }
  h4 {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    text-align: left;
    font-size: 2rem !important;
  }
`;

const InnerContent = styled.div`
  padding: 2rem 0;
  width: 700px;
  max-width: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 720px) {
    flex-wrap: nowrap;
  }
`;
const ContentWrapper = styled.div`
  width: 550px;
  max-width: calc(100% - 4rem);
`;

const ImageWrapper = styled.div`
  img {
    width: 300px;
    border-radius: 50%;
    margin: 0 !important;
  }
  @media (min-width: 720px) {
    margin-right: 3rem;
  }
`;
const Bio = () => {
  return (
    <BioWrapper>
      <InnerContent>
        <ImageWrapper>
          <img src="/images/me.jpg" />
        </ImageWrapper>
        <ContentWrapper>
          <h4>
            Hi There!{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </h4>
          <p>
            I'm Alex, creator of <Link to="/">Thorium</Link>,{" "}
            <a
              href="https://spaceedventures.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Space EdVentures
            </a>
            , and countless other simulator controls. I was a professional
            flight director at the{" "}
            <a
              href="https://spacecenter.alpineschools.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Christa McAullife Space Center
            </a>{" "}
            for 4 years and helped build the{" "}
            <a
              href="https://www.spacecamputah.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              USS Voyager II
            </a>
            .
          </p>
          <p>
            These days I'm a professional web developer with a passion for
            bridge simulators. You can read my thoughts on my{" "}
            <a
              href="https://ralexanderson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/ralex1993"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </ContentWrapper>
      </InnerContent>
    </BioWrapper>
  );
};

export default Bio;
