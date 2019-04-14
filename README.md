# Bolt

Pismo's styleguide and design system with it's React components that compose most of the platform UI.

---
[![Build Status](https://travis-ci.org/pismo/bolt.svg?branch=master)](https://travis-ci.org/pismo/bolt)

This is a monorepo using [lerna](https://lernajs.io/). Each package inside `/packages` is a completely decoupled project. They are individually published to [npm](https://www.npmjs.com/org/pismo).

_Technologies used_

- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://github.com/sw-yx/react-typescript-cheatsheet)
- [Styled Components](https://www.styled-components.com/docs/api#typescript)
- [Docz](https://www.docz.site/documentation/components-api)
- [Jest](https://github.com/sapegin/jest-cheat-sheet)
- [React Testing Library](https://github.com/kentcdodds/react-testing-library#usage)

_To do_

- [ ] Toggle themes on docz

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
import { ThemeProvider, withTheme } from 'styled-components'
import { createGlobalStylePismo, themePismo } from '@bolt/core'

import { setUser } from './hooks/userContext'
import { language } from './hooks/languageContext'

import { Wrapper } from '@pismo/bolt-wrapper'
import { Button } from '@pismo/bolt-button'

const GlobalStyle = withTheme(createGlobalStylePismo())

export const App = () => {
  return (
    <ThemeProvider theme={themePismo}>
      <Wrapper>
        <Button>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  )
}
```

_Components_

- Read the documentation to find the component you need and check props and examples
- Install the component in your app `yarn add @pismo/bolt-<component-name>`
- Use it!

## Components

| Package | Version | Documentation |
| - | - | - |
| [`bolt-button`](/packages/button)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-button.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-button)| [Button Documentation](https://bolt.pismolabs.io/packages-core-components-button) |
| [`bolt-checkbox`](/packages/checkbox)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-checkbox.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-checkbox)| [Checkbox Documentation](https://bolt.pismolabs.io/packages-core-components-checkbox) |
| [`bolt-core`](/packages/core)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-core.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-core)| [Core Documentation](https://bolt.pismolabs.io/packages-core-components-core) |
| [`bolt-form`](/packages/form)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-form.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-form)| [Form Documentation](https://bolt.pismolabs.io/packages-core-components-form) |
| [`bolt-form-buttons`](/packages/form-buttons)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-form-buttons.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-form-buttons)| [FormButtons Documentation](https://bolt.pismolabs.io/packages-core-components-form-buttons) |
| [`bolt-form-section`](/packages/form-section)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-form-section.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-form-section)| [FormSection Documentation](https://bolt.pismolabs.io/packages-core-components-form-section) |
| [`bolt-loader`](/packages/loader)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-loader.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-loader)| [Loader Documentation](https://bolt.pismolabs.io/packages-core-components-loader) |
| [`bolt-pismo-id`](/packages/pismo-id)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-pismo-id.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-pismo-id)| [PismoId Documentation](https://bolt.pismolabs.io/packages-core-components-pismo-id) |
| [`bolt-search-field`](/packages/search-field)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-search-field.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-search-field)| [SearchField Documentation](https://bolt.pismolabs.io/packages-core-components-search-field) |
| [`bolt-search-list`](/packages/search-list)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-search-list.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-search-list)| [SearchList Documentation](https://bolt.pismolabs.io/packages-core-components-search-list) |
| [`bolt-select-field`](/packages/select-field)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-select-field.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-select-field)| [SelectField Documentation](https://bolt.pismolabs.io/packages-core-components-select-field) |
| [`bolt-table`](/packages/table)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-table.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-table)| [Table Documentation](https://bolt.pismolabs.io/packages-core-components-table) |
| [`bolt-table-item`](/packages/table-item)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-table-item.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-table-item)| [TableItem Documentation](https://bolt.pismolabs.io/packages-core-components-table-item) |
| [`bolt-text-field`](/packages/text-field)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-text-field.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-text-field)| [TextField Documentation](https://bolt.pismolabs.io/packages-core-components-text-field) |
| [`bolt-timer`](/packages/timer)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-timer.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-timer)| [Timer Documentation](https://bolt.pismolabs.io/packages-core-components-timer) |
| [`bolt-toast`](/packages/toast)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-toast.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-toast)| [Toast Documentation](https://bolt.pismolabs.io/packages-core-components-toast) |
| [`bolt-uploader`](/packages/uploader)| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-uploader.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-uploader)| [Uploader Documentation](https://bolt.pismolabs.io/packages-core-components-uploader) |


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
