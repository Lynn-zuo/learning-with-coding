import { PureComponent, Fragment, StrictMode } from 'react'
// import Portal from './Portal'
import FragmentComponent from './Fragment'
import StrictModeComponent from './StrictMode'
import CommonMode from './CommonMode'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <FragmentComponent />
        <StrictMode>
            <StrictModeComponent />
        </StrictMode>
        <CommonMode />
      </Fragment>
    )
  }
}
