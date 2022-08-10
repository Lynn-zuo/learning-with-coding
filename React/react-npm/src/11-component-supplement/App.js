import { PureComponent, Fragment } from 'react'
// import Portal from './Portal'
import FragmentComponent from './Fragment'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <FragmentComponent />
      </Fragment>
    )
  }
}
