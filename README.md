# Bolt

Pismo's styleguide and design system with it's React components that compose most of the platform UI.

---

This is a monorepo using [lerna](https://lernajs.io/). Each package inside `/packages` is a completely decoupled project. They are individually published to [npm](https://www.npmjs.com/org/pismo).

_Technologies used_

- React(https://reactjs.org/docs/getting-started.html)
- [Typescript](https://github.com/sw-yx/react-typescript-cheatsheet)
- [Styled Components](https://www.styled-components.com/docs/api#typescript)
- [Docz](https://www.docz.site/documentation/components-api)
- [Jest](https://github.com/sapegin/jest-cheat-sheet)
- [React Testing Library](https://github.com/kentcdodds/react-testing-library#usage)

_Goals_

The `@pismo/bolt-core`:

- export a styled component instance and their helpers already ready to use in typescript projects
- export the app theme (to be used in ThemeProvider) and a GlobalStyle component to use in pismo front-ends

The `@pismo/bolt-<component-name>`:

- export a component already ready to use.

## Bolt usage in pismo applications

_Setup_

- In your `App.js` or `index.js` use the `ThemeProvider` from styled-components to import the theme of your choice from `@pismo/bolt-core`.
- Also in your `App.js` or `index.js` create a `GlobalStyle` component with the `createGlobalStylePismo` from `@pismo/bolt-core` and use it.
- If there is a need you can also pass a string in `createGlobalStylePismo` to set your own globals.

Check a complete example below of an App.js:

```jsx
import React from 'react'
import PismoID from 'id-ui'
import { I18nProvider } from '@lingui/react'
import { Router } from '@reach/router'
import { ThemeProvider, withTheme } from 'styled-components'
import { createGlobalStylePismo, themePismo } from '@bolt/core'

import { setUser } from './hooks/userContext'
import { language } from './hooks/languageContext'

import Dashboard from './Dashboard'
import ContractLink from './ContractLink'
import ContractStores from './ContractStores'
import ContractStoreUpsert from './ContractStoreUpsert'
import ContractStoreTerminals from './ContractStoreTerminals'
import ContractStoreTerminalUpsert from './ContractStoreTerminalUpsert'

const GlobalStyle = withTheme(createGlobalStylePismo())

export const App = () => {
  const BASE_URL = process.env.REACT_APP_API_URL
  const BASE_CONTRACT_URL = '/customer/:customerId/account/:accountId/contract/:contractId'

  return (
    <ThemeProvider theme={themePismo}>
      <I18nProvider language={language}>
        <PismoID onUpdate={setUser} baseURL={BASE_URL} keepAlive>
          <Router>
            <Dashboard path="/" />
            <ContractLink path={`${BASE_CONTRACT_URL}`} />
            <ContractStores path={`${BASE_CONTRACT_URL}/stores`} />
            <ContractStoreUpsert path={`${BASE_CONTRACT_URL}/store/upsert/:storeId`} />
            <ContractStoreTerminals path={`${BASE_CONTRACT_URL}/store/:storeId/terminals`} />
            <ContractStoreTerminalUpsert path={`${BASE_CONTRACT_URL}/store/:storeId/terminal/upsert/:terminalId`} />
          </Router>
          <GlobalStyle />
        </PismoID>
      </I18nProvider>
    </ThemeProvider>
  )
}
```

_Components_

- Read the documentation to find the component you need and check props and examples
- Install the component in your app `yarn add @pismo/bolt-<component-name>`
- Use it!

## Development flow

### Core

If you need to change the creation method for GlobalStyle or create a new theme, core is the place to make those changes.

_Change a Theme_

- Access the `themeXXX.ts`
- Make your changes in the interface and also the theme object
- Done!

_Create a new Theme_

- Create a `themeXXX.ts` in the root folder. (Don't forget the interface)
- Export it in `index.js` as `export { themeXXX } from './themeXXX'`

### Components

Create new components is pretty easy. Follow the instructions below to start.

- Git clone this monorepo
- Create a new branch for this component `feature/my-button`
- Make sure you installed all dependencies by running `yarn`
- Run the command `yarn template:component MyButton`
- Install any dependencies you need in this package by `cd packages/my-button && yarn add other-dependency`
- Make your changes to `MyButton.tsx` create `fns` or whatever is necessary to finish the feature
- Update the documentation on `MyButton.mdx` file inside `packages/my-button`
- Git push and create a PR.

## Documentation

We're using docz to document all the components. Jenkins is already set so on every merge to develop branch triggers a documentation change based on the .mdx files explained in the component development flow.

Just check `https://bolt.pismolabs.io/`

## Distribution

First, make sure you are signed in to npm and is a team member of `@pismo:developers`.

```sh
> npm login
```

Then, simply run:

```sh
> lerna publish
```

Follow the steps, choose the proper version to be published and lerna will publish every package for you.

## Templates

For now we just have the component template.

Important to check it to make sure we have the most updated templates.
