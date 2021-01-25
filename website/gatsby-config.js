module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth UI',
        slug: 'smooth-ui',
        author: 'Greg Bergé',
        siteUrl: 'https://www.smooth-code.com/open-source/smooth-ui',
        description:
          'Modern UI library for React. Focused on productivity, flexibility and accessibility.',
        github: 'https://github.com/smooth-code/smooth-ui',
        menu: ['Getting Started', 'Customization', 'Components', 'Advanced'],
        nav: [{ title: 'Docs', url: 'https://gajewsky.github.io/smooth-ui/docs/getting-started/' }],
        codeFundProperty: 430,
        theme: {
          useCustomProperties: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: '@bundle-analyzer/gatsby-plugin',
      options: {
        token: '0f76d516797d28b3eac9999c701186d94360c766',
      },
    },
  ],
}
