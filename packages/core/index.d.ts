declare module '*.png'
declare module '*.img'
declare module '*.svg'

declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object
    toBeInTheDOM: () => void
    toBeInTheDocument: (htmlElement: string) => object
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object
    toBeInTheDOM: () => void
    toBeInTheDocument: (htmlElement: string) => object
  }
}
