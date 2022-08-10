import { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
        this.props.children,
        document.getElementById('modal')
    )
  }
}
