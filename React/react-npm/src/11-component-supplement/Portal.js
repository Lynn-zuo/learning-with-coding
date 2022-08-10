import { PureComponent } from 'react'
import Modal from './Modal'

export default class Portal extends PureComponent {
  render() {
    return (
      <div>
        <h2>Portal</h2>
        <Modal>
            <h2 className='modal-style'>modal</h2>
        </Modal>
      </div>
    )
  }
}
