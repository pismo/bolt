import * as styledComponents from 'styled-components'
const { css } = styledComponents

const BASE_FONT_SIZE = 16
const SIZES = {
  desktop: 1025,
  tablet: 900,
  mobile: 737,
}

export interface MediaInterface {
  desktop?: (args: TemplateStringsArray) => string
  tablet?: (args: TemplateStringsArray) => string
  mobile?: (args: TemplateStringsArray) => string
}

export const media: MediaInterface = Object.keys(SIZES).reduce((acc, label) => {
  const mediaStart = label.includes('desktop') ? 'min' : 'max'

  return {
    ...acc,
    [label]: (args: TemplateStringsArray) => css`
    @media (${mediaStart}-width: ${SIZES[label] / BASE_FONT_SIZE}em) {
      ${css(args)}
    }
  `,
  }
}, {})
