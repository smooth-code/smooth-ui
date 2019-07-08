module.exports = {
  __experimentalThemes: [
    {
      resolve: require.resolve('smooth-doc'),
      options: {
        name: 'Smooth UI',
        slug: 'smooth-ui',
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
