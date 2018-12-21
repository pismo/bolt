export default {
  typescript: true,
  title: 'Pismo',
  dest: '/build',
  description: 'Pismo UI documentation',
  themeConfig: {
    colors: {
      primary: '#F37A21',
    },
    styles: {
      h1: {
        fontSize: [60, 40, 32],
        fontWeight: 300,
        letterSpacing: '-0.02em',
        fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
      },
    },
  },
  modifyBundlerConfig: config => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(rule => ({
        ...rule,
        use: rule.use.map(ruleUse =>
          ruleUse.loader.includes('react-docgen-typescript-loader')
            ? {
                ...ruleUse,
                options: {
                  propFilter: prop => {
                    if (prop.parent == null) return true
                    return !prop.parent.fileName.includes('node_modules')
                  },
                },
              }
            : ruleUse,
        ),
      })),
    },
  }),
}
