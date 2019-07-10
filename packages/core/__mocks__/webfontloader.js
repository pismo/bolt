const webfontloader = jest.genMockFromModule('webfontloader')

webfontloader.load = () => {}

module.exports = {
  default: webfontloader
}
