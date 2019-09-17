const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: `/docs/`,
    toPath: `/docs/getting-started/`,
    redirectInBrowser: true,
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new BundleAnalyzerPlugin({
        token: '0f76d516797d28b3eac9999c701186d94360c766',
      }),
    ],
  })
}
