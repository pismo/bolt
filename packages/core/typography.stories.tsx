import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { WrapperPismoTheme } from './components/wrapperPismoTheme'
import { H1, H2, H3, H4, P, Small, Tiny } from './typography'

storiesOf('Basics/Typography', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      propTables: [H1],
      text: `
        # Basics/Typography

        ## Global settings
        ---

        All elements of Bolt have defaults that comes from the theme:

        - fontFamily: Lato
        - fontSizeBase: 16px
        - lineHeightBase: 1.5

        ## API
        ---

        All Typography components have the props as the H1 shown below
      `,
    },
    options: {
      showPanel: false,
    },
  })
  .add('Global settings', () => <H1> Typography </H1>)
  .addParameters({
    info: {
      propTablesExclude: [H1, H2, H3, H4, WrapperPismoTheme],
    },
    options: {
      showPanel: false,
    },
  })
  .add('Heading sizes', () => (
    <WrapperPismoTheme>
      <H1> {'<H1> - Bolt components library'} </H1>
      <H2> {'<H2> - Bolt components library'} </H2>
      <H3> {'<H3> - Bolt components library'} </H3>
      <H4> {'<H4> - Bolt components library'} </H4>
    </WrapperPismoTheme>
  ))
  .addParameters({
    info: {
      propTablesExclude: [Small, Tiny, WrapperPismoTheme],
    },
    options: {
      showPanel: false,
    },
  })
  .add('Small sizes', () => (
    <WrapperPismoTheme>
      <Small> {'<Small> - Bolt components library'} </Small>
      <br />
      <Tiny> {'<Tiny> - Bolt components library'} </Tiny>
    </WrapperPismoTheme>
  ))
  .addParameters({
    info: {
      propTablesExclude: [P, WrapperPismoTheme],
    },
    options: {
      showPanel: false,
    },
  })
  .add('Paragraph', () => (
    <WrapperPismoTheme>
      <P> {'<P> - Bolt components library'} </P>
    </WrapperPismoTheme>
  ))
  .addParameters({
    info: {
      propTablesExclude: [P, WrapperPismoTheme],
      text: `##### Use the prop 'fontStyle' to style the Typography`,
    },
    options: {
      showPanel: false,
    },
  })
  .add('Styles', () => (
    <WrapperPismoTheme>
      <P fontStyle="light">{'<P fontStyle="light"> - Bolt component <P> light'}</P>
      <P fontStyle="light italic">{'<P fontStyle="light italic"> - Bolt component <P> light italic'}</P>
      <P>{'<P> - Bolt component <P> regular'}</P>
      <P fontStyle="regular italic">{'<P fontStyle="regular italic"> - Bolt component <P> regular italic'}</P>
      <P fontStyle="bold">{'<P fontStyle="bold"> - Bolt component <P> bold'}</P>
      <P fontStyle="bold italic">{'<P fontStyle="bold italic"> - Bolt component <P> bold italic'}</P>
      <P fontStyle="black">{'<P fontStyle="black"> - Bolt component <P> black'}</P>
      <P fontStyle="black italic">{'<P fontStyle="black italic"> - Bolt component <P> black italic'}</P>
    </WrapperPismoTheme>
  ))
