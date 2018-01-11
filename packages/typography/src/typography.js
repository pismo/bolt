import Typography from 'typography'
import configuration from './configuration'

const typography = new Typography({
  ...configuration,
})

const { rhythm } = typography

export { rhythm }
export default typography
