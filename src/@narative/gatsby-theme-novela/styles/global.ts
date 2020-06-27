import { css } from "@emotion/core";
import { globalStyles as themeStyles } from "@narative/gatsby-theme-novela/src/styles/global";

export const globalStyles = ({ colors }) => css`
  ${themeStyles}
  a {
    color: ${colors.accent};
  }
`;
