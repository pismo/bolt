/** Styles
 * These are valid for the whole document since we are importing .scss files directly
 */

import './index.scss'

/** CSS-in-JS
 * These are meant to be used in css-in-js solutions like styled-components
*/

import typography from '@pismo/bolt-typography'
import colors from '@pismo/bolt-colors'


/** Whatever
 * Do something? I don't know yet
*/

const core = {
  typography,
  colors,
}


/** Exports
 * We export each module named separately, but also the whole core as default
 */

export {
  typography,
  colors,
}

export default core
