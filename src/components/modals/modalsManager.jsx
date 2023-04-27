import React from 'react'

import ModalOne from './addmodals/modal1'
import ModalTwo from './addmodals/modal2'


const ModalManager = ({
  closeFn = () => null,
  modal = ''
}) => (
  <>
    <ModalOne
      closeFn={closeFn}
      open={modal === 'modal-one'} />

    <ModalTwo
      closeFn={closeFn}
      open={modal === 'modal-two'} />

  </>
)

export default ModalManager