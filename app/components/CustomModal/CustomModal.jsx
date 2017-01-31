import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import { BaseTextArea, DarkBtn } from 'atoms'
import { newDuckTop, pointer, submitDuckBtn } from './styles'

const modalStyles = {
  content: {
    borderRadius: 5,
    backgroundColor: '#ebebeb',
    height: 220,
    margin: '0 auto',
    padding: 0,
    width: 350,
  },
}

export default function CustomModal (props) {
  const { closeModal, duckText, isOpen, isSubmitDisabled, openModal, updateDuckText, user } = props
  function submitDuck () {
    console.log('Duck: ', duckText)
    console.log('user: ', user)
  }

  return (
    <a className={DarkBtn.styles.btn} onClick={openModal} tabIndex="-1">
      {'Duck'}
      <Modal contentLabel="Duck" isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        <div className={newDuckTop}>
          <span>{'Componse new Duck'}</span>
          <a className={pointer} onClick={closeModal} tabIndex="-1">{'X'}</a>
        </div>
        <BaseTextArea
          maxLength={140}
          onChange={updateDuckText}
          placeholder="What's on your mind?"
          type="text"
          value={duckText}
        />
        <DarkBtn className={submitDuckBtn} disabled={isSubmitDisabled} onClick={submitDuck}>
          {'Duck'}
        </DarkBtn>
      </Modal>
    </a>
  )
}

CustomModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  duckText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  updateDuckText: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
}
