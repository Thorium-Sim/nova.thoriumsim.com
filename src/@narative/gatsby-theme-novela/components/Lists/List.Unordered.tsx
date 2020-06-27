import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const UnorderedList = styled.ul`
  list-style: none;
  counter-reset: list;
  color: ${(p) => p.theme.colors.articleText};
  position: relative;
  padding: 15px 0 30px 30px;
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto;
  font-size: 18px;

  width: 100%;
  max-width: 680px;

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    padding-left: 0px;
  `};

  ${mediaqueries.phablet`
    padding-left: 20px;
  `};

  li {
    position: relative;
    padding-bottom: 15px;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 30px;
    `};

    p {
      ${mediaqueries.tablet`
        padding: 0;
      `};
    }
  }

  li > :not(ol, ul) {
    display: inline;
  }

  li::before {
    width: 3rem;
    display: inline-block;
    position: absolute;
    color: ${(p) => p.theme.colors.accent};
  }

  li::before {
    content: "";
    position: absolute;
    left: -30px;
    top: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border: solid 3px;
    border-color: ${(p) => p.theme.colors.accent};

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

export default UnorderedList;
