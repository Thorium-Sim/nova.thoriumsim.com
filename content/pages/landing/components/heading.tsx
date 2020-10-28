import React from "react";
import styled from "@emotion/styled";
import { Button } from "../../../../src/components/signupForm";
import { FaDiscord } from "react-icons/fa";
const HeaderImage = styled.img`
  max-width: 100%;
  padding: 0 2rem;
  width: 200px;
  margin: 0 !important;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
  @media (min-width: 420px) {
    width: 300px;
  }
`;

const Header = styled.h1`
  margin: 0;
  font-weight: 800;
  color: white;
  line-height: 1.15;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  font-size: 3rem;
  @media (min-width: 420px) {
    font-size: 6rem;
  }
`;

const Subheader = styled.h2`
  margin: 0;
  margin-top: 0.5rem;
  font-size: 2rem;
  color: white;
  line-height: 1.15;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  @media (min-width: 420px) {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const ButtonLink = styled.a`
  border: 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  padding: 0;
  position: relative;
  vertical-align: middle;
  flex-grow: 1;
  background: linear-gradient(
    135deg,
    rgba(198, 54, 189, 1) 0%,
    rgba(76, 1, 175, 1) 100%
  );

  &:hover,
  &:focus {
    outline: none;
    & > span {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  & > span {
    display: block;
    transition: all 200ms ease-in-out;
    padding: 12px 24px;
  }
`;

const Heading = () => {
  return (
    <HeadingWrapper>
      <HeaderImage
        src={require("../images/Triquetra.svg")}
        alt="Thorium Nova"
      />
      <Header>Thorium Nova</Header>
      <Subheader>The Future of Bridge Simulation</Subheader>
      <ButtonLink
        data-element="submit"
        href="https://discord.gg/BxwXaUB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Join Us On Discord <FaDiscord size="2em" />
        </span>
      </ButtonLink>
    </HeadingWrapper>
  );
};

export default Heading;
