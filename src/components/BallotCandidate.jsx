import React, { PropTypes } from 'react'
import Modal, {closeStyle} from 'simple-react-modal'

import CandidateDetails from './CandidateDetails.jsx'

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

  _renderParty(party) {
    switch (party.toLowerCase()) {
    case 'a':
      return 'American Shopping Party'
    case 'c':
      return 'Constitution Party of Hawaii'
    case 'd':
      return 'Democratic Party of Hawaii'
    case 'g':
      return 'Green Party of Hawaii'
    case 'i':
      return 'Hawaii Independent Party'
    case 'l':
      return 'Libertarian Party of Hawaii'
    case 'r':
      return 'Hawaii Republican Party'
    case 'ns':
      return 'Non-Partisan Special'
    case 'n':
      return 'Non-Partisan'
    default:
      return party
    }
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
          {this._renderParty(candidate.Candidate_Party)}
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
