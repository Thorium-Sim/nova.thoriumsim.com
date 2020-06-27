import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../@narative/gatsby-theme-novela/components/Layout/Layout";
import MDXRenderer from "@narative/gatsby-theme-novela/src/components/MDX";
import ArticleShare from "@narative/gatsby-theme-novela/src/sections/article/Article.Share";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Img from "gatsby-image";
import styled from "@emotion/styled";
const StaticBackground = styled.div`
  width: 105%;
  height: 95vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  z-index: 1;
  background-color: #111;
  pointer-events: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  & > * {
    opacity: 0.4;
    height: 95vh;
  }
  @media (min-width: 420px) {
    height: 80vh;
    & > * {
      height: 80vh;
    }
  }
`;

const query = graphql`
  query IndexQuery {
    page(slug: { eq: "/index" }) {
      id
      slug
      title
      body
      hero {
        full: childImageSharp {
          fluid(maxWidth: 944, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        seo: childImageSharp {
          fixed(width: 1200, quality: 100) {
            src
          }
        }
      }
    }
  }
`;
const App = () => {
  const { page } = useStaticQuery(query);
  return (
    <Layout>
      <SEO title="Thorium Nova" image={page.hero.seo.src} />
      <StaticBackground>
        <Img fluid={page.hero.full.fluid} />
      </StaticBackground>
      <MDXRenderer content={page.body}>
        <ArticleShare />
      </MDXRenderer>
    </Layout>
  );
};

export default App;
