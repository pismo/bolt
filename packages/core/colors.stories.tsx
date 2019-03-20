import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Flex } from '@rebass/grid'
import { FlexPismoColor } from './docz/FlexPismoColor'
import { WrapperPismoTheme } from './docz/wrapperPismoTheme'

import { colors } from './colors'
import { P } from './typography'

storiesOf('Basics/Colors', module)
  .addParameters({
    info: {
      source: false,
      propTablesExclude: [colors, Flex, FlexPismoColor, P, WrapperPismoTheme],
      text: `
        ##### The package @pismo/bolt-core export the colors available in the component library

        ## Import
        ---

        ~~~js
        import { colors } from '@pismo/bolt-core'
        ~~~

        ## Usage

        ~~~js
        const Button = styled.button
          color: colors.grey,
          background-color: colors.red,
        ~~~
      `,
    },
    options: {
      showPanel: false,
    },
  })
  .add('Usage', () => {
    return (
      <WrapperPismoTheme>
        <Flex justifyContent="space-between" flexDirection={['column', 'column', 'row']}>
          <Flex flexDirection="column" width={[1, 1 / 2, 1 / 3]} m="10px">
            <FlexPismoColor backgroundColor={colors.grey} height={100}>
              <P fontStyle="light">colors.grey</P>
              <P>#8692A6</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey900} height={50}>
              <P fontStyle="light">colors.grey900</P>
              <P>#151A21</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey800} height={50}>
              <P fontStyle="light">colors.grey800</P>
              <P>#2C3644</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey700} height={50}>
              <P fontStyle="light">colors.grey700</P>
              <P>#4F5A6A</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey600} height={50}>
              <P fontStyle="light">colors.grey600</P>
              <P>#6E7A8C</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey500} height={50}>
              <P fontStyle="light">colors.grey500</P>
              <P>#8692A6</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey400} height={50}>
              <P fontStyle="light">colors.grey400</P>
              <P>#A2AEC2</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey300} height={50}>
              <P fontStyle="light" style={{ color: '#2c3644' }}>
                colors.grey300
              </P>
              <P style={{ color: '#151A21' }}>#C1C7D4</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey200} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.grey200
              </P>
              <P style={{ color: '#151A21' }}>#D6DAE2</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey100} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.grey100
              </P>
              <P style={{ color: '#151A21' }}>#ECEEF2</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.grey50} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.grey50
              </P>
              <P style={{ color: '#151A21' }}>#FAFAFA</P>
            </FlexPismoColor>
          </Flex>
          <Flex flexDirection="column" width={[1, 1 / 2, 1 / 3]} m="10px">
            <FlexPismoColor backgroundColor={colors.blue} height={100}>
              <P fontStyle="light">colors.blue</P>
              <P>#3BB2DD</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.blue700} height={50}>
              <P fontStyle="light">colors.blue700</P>
              <P>#0B88B6</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.blue500} height={50}>
              <P fontStyle="light">colors.blue500</P>
              <P>#3BB2DD</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.blue200} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.blue200
              </P>
              <P style={{ color: '#151A21' }}>#77CFEE</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.blue100} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.blue100
              </P>
              <P style={{ color: '#151A21' }}>#C3E9F6</P>
            </FlexPismoColor>
          </Flex>
          <Flex flexDirection="column" width={[1, 1 / 2, 1 / 3]} m="10px">
            <FlexPismoColor backgroundColor={colors.red} height={100}>
              <P fontStyle="light">colors.red</P>
              <P>#EC3853</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.red700} height={50}>
              <P fontStyle="light">colors.red700</P>
              <P>#B4152C</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.red500} height={50}>
              <P fontStyle="light">colors.red500</P>
              <P>#EC3853</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.red200} height={50}>
              <P fontStyle="light" style={{ color: '#151A21' }}>
                colors.red200
              </P>
              <P style={{ color: '#151A21' }}>#F3798B</P>
            </FlexPismoColor>
            <FlexPismoColor backgroundColor={colors.red100} height={50}>
              <P fontStyle="light" style={{ color: '#2c3644' }}>
                colors.red100
              </P>
              <P style={{ color: '#151A21' }}>#F4BAC3</P>
            </FlexPismoColor>
          </Flex>
        </Flex>
      </WrapperPismoTheme>
    )
  })
