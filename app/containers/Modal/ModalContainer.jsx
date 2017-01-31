import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ducksActionCreators from 'redux/modules/ducks'
import * as modalActionCreators from 'redux/modules/modal'
import { CustomModal } from 'components'

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...ducksActionCreators, ...modalActionCreators }, dispatch)
}

function mapStateToProps ({ modal, users }) {
  const duckTextLength = modal.duckText.length
  return {
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
    user: users[users.authedId] ? users[users.authedId].info : {},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal)
