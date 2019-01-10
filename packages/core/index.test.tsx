import {
  colors,
  createGlobalStyle,
  createGlobalStylePismo,
  css,
  Flex,
  Grid,
  H1,
  H2,
  H3,
  H4,
  keyframes,
  media,
  P,
  Small,
  styled,
  themePismo,
  ThemeProvider,
  Tiny,
  withTheme,
} from "./index"

describe("index export test", () => {
  it("should export the styled correctly", () => {
    expect(styled).not.toBeNull()
    expect(styled).toBeDefined()
  })

  it("should export the createGlobalStylePismo correctly", () => {
    expect(createGlobalStylePismo).not.toBeNull()
    expect(createGlobalStylePismo).toBeDefined()
  })

  it("should export the createGlobalStyle correctly", () => {
    expect(createGlobalStyle).not.toBeNull()
    expect(createGlobalStyle).toBeDefined()
  })

  it("should export the themePismo correctly", () => {
    expect(themePismo).not.toBeNull()
    expect(themePismo).toBeDefined()
  })

  it("should export the css correctly", () => {
    expect(css).not.toBeNull()
    expect(css).toBeDefined()
  })

  it("should export the keyframes correctly", () => {
    expect(keyframes).not.toBeNull()
    expect(keyframes).toBeDefined()
  })

  it("should export the ThemeProvider correctly", () => {
    expect(ThemeProvider).not.toBeNull()
    expect(ThemeProvider).toBeDefined()
  })

  it("should export the withTheme correctly", () => {
    expect(withTheme).not.toBeNull()
    expect(withTheme).toBeDefined()
  })

  it("should export the Grid correctly", () => {
    expect(Grid).not.toBeNull()
    expect(Grid).toBeDefined()
  })

  it("should export the Flex correctly", () => {
    expect(Flex).not.toBeNull()
    expect(Flex).toBeDefined()
  })

  it("should export the H1 correctly", () => {
    expect(H1).not.toBeNull()
    expect(H1).toBeDefined()
  })

  it("should export the H2 correctly", () => {
    expect(H2).not.toBeNull()
    expect(H2).toBeDefined()
  })

  it("should export the H3 correctly", () => {
    expect(H3).not.toBeNull()
    expect(H3).toBeDefined()
  })

  it("should export the H4 correctly", () => {
    expect(H4).not.toBeNull()
    expect(H4).toBeDefined()
  })

  it("should export the P correctly", () => {
    expect(P).not.toBeNull()
    expect(P).toBeDefined()
  })

  it("should export the Small correctly", () => {
    expect(Small).not.toBeNull()
    expect(Small).toBeDefined()
  })

  it("should export the Tiny correctly", () => {
    expect(Tiny).not.toBeNull()
    expect(Tiny).toBeDefined()
  })

  it("should export the colors correctly", () => {
    expect(colors).not.toBeNull()
    expect(colors).toBeDefined()
  })

  it("should export the media correctly", () => {
    expect(media).not.toBeNull()
    expect(media).toBeDefined()
  })
})
