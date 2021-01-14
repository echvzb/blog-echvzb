const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              serie
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  
  }
  const normalTextToPath = txt => '/' + txt.match(/\w+/g).join('-').toLowerCase();

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { serie, title } = node.frontmatter;

    createPage({
      path: normalTextToPath(serie) + normalTextToPath(title),
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}