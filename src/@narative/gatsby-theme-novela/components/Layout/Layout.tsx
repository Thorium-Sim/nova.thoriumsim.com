import React, { useEffect } from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useColorMode, ThemeProvider, useThemeUI } from "theme-ui";

import NavigationFooter from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Footer";
import NavigationHeader from "../Navigation/Navigation.Header";
import ArticlesContextProvider from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List.Context";

import { globalStyles } from "@narative/gatsby-theme-novela/src/styles";
const Container = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;
/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();
  useEffect(() => {
    parent.postMessage({ theme: colorMode }, "*");
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        <Content>{children}</Content>
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
};

export default Layout;
