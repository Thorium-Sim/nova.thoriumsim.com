const slugify = require("slugify");
const crypto = require(`crypto`);

function generateSlug(...arguments_) {
  return `/${arguments_.join("/")}`.replace(/\/\/+/g, "/");
}

exports.createPages = async (
  { actions: { createPage }, graphql },
  themeOptions
) => {};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Page implements Node {
      id: ID!
      slug: String!
      title: String!
      body: String!
      hero: File @fileByRelativePath
    }
  `);
};

exports.onCreateNode = (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const pagesPath = "content/pages";
  const fileNode = getNode(node.parent);
  const source = fileNode && fileNode.sourceInstanceName;
  const basePath = "/";
  const articlePermalinkFormat = themeOptions.articlePermalinkFormat || ":slug";

  function generateArticlePermalink(slug, date) {
    const [year, month, day] = date.match(/\d{4}-\d{2}-\d{2}/)[0].split("-");
    const permalinkData = {
      year,
      month,
      day,
      slug,
    };

    const permalink = articlePermalinkFormat.replace(/(:[a-z_]+)/g, (match) => {
      const key = match.substr(1);
      if (permalinkData.hasOwnProperty(key)) {
        return permalinkData[key];
      }
      throw new Error(`
          We could not find the value for: "${key}".
          Please verify the articlePermalinkFormat format in theme options.
          https://github.com/narative/gatsby-theme-novela#theme-options
        `);
    });

    return permalink;
  }

  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      author: node.frontmatter.author,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero,
      secret: node.frontmatter.secret || false,
      slug: generateSlug(
        basePath,
        generateArticlePermalink(
          slugify(node.frontmatter.slug || node.frontmatter.title),
          node.frontmatter.date
        )
      ),
      title: node.frontmatter.title,
      subscription: node.frontmatter.subscription !== false,
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Page`),
      parent: node.id,
      children: [],
      internal: {
        type: `Page`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Page`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }
};

const mdxResolverPassthrough = (fieldName) => async (
  source,
  arguments_,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, arguments_, context, {
    fieldName,
  });
  return result;
};
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Page: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
    },
  });
};
