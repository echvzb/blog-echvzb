const path = require(`path`);
const changePathName = require(path.resolve('build_internal_js/changePathName/index.js'));

changePathName.start(path.resolve('_data/blog'));
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  
  const templates = {
    blogPost: path.resolve(`src/templates/blogTemplate.js`),
    serie: path.resolve(`src/templates/serieTemplate.js`)
  }

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
              path
              template
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    createPage({
      path: node.frontmatter.path,
      component: templates[node.frontmatter.template],
      context: {}, // additional data can be passed via context
    })
  })
}