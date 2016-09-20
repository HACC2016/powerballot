import React, { PropTypes } from 'react'
import Modal, {closeStyle} from 'simple-react-modal'

import CandidateDetails from './CandidateDetails.jsx'
import { partyIdToTitle } from 'src/services/candidate_utils.js'

import styles from './ballot-candidate.scss'

export default class BallotCandidate extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  _showModal = () => {
    this.setState({showModal: true})
  }

  _closeModal = () => {
    this.setState({showModal: false})
  }

  render () {
    const { candidate } = this.props

    return (
      <div className={styles['ballot-candidate']}>
        <div className={styles['name']}>
          <a onClick={this._showModal}>
            {candidate.Candidate_Name}
          </a>
        </div>
        <div className={styles['party']}>
          {partyIdToTitle(candidate.Candidate_Party)}
        </div>

        <Modal
          closeOnOuterClick={true}
          show={this.state.showModal}
          onClose={this._closeModal}
        >
          <a style={closeStyle} onClick={this._closeModal}>X</a>
          <CandidateDetails candidate={candidate} />
        </Modal>
      </div>
    )
  }
}

BallotCandidate.propTypes = {
  candidate: PropTypes.object,
}
