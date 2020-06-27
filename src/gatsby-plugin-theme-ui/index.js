import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  fonts: {
    ...novelaTheme.fonts,
    serif: "'Exo 2', Georgia, Serif",
  },
  tags: {
    ...novelaTheme.tags,
    figcaption: {
      marginBottom: "2rem",
    },
  },
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: "#000",
    secondary: "#73737D",
    accent: "#891CB6",
    grey: "#73737D",
    background: "#fff",
    card: "#f5f7fa",
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        accent: "#C636BD",
        grey: "#ddd",
      },
    },
  },
};
