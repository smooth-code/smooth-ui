module.exports = {
  __experimentalThemes: [
    {
      resolve: require.resolve('smooth-doc'),
      options: {
        name: 'Smooth UI',
        slug: 'smooth-ui',
        author: 'Greg Bergé',
        siteUrl: 'https://www.smooth-code.com/open-source/smooth-ui',
        description:
          'Modern UI library for React. Focused on productivity, flexibility and accessibility.',
        github: 'https://github.com/smooth-code/smooth-ui',
        menu: ['Getting Started', 'Customization', 'Components', 'Advanced'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 268,
      },
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
  ],
}
