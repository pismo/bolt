export const imports = {
  'packages/core/core.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "packages-core-core" */ 'packages/core/core.mdx'
    ),
}
