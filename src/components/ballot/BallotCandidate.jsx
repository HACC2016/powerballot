/* global ga:true */
import React, { PropTypes } from 'react'
import Modal, {closeStyle} from 'simple-react-modal'

import SvgIcon from 'src/components/common/SvgIcon'

import CandidateDetails from './CandidateDetails.jsx'
import CandidateImage from './CandidateImage.jsx'

import { partyIdToTitle } from 'src/services/candidate_utils.js'

import NoPhoto from 'src/assets/no_photo-14.svg'

import styles from './ballot-candidate.scss'

export default class BallotCandidate extends React.Component {
  state = {}

  _showModal = () => {
    const { Candidate_Name } = this.props.candidate
    this.setState({showModal: true})
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'button', 'click', Candidate_Name, 1)
    }
  }

  _closeModal = () => {
    this.setState({showModal: false})
  }

  render () {
    const { candidate } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['photo-container']} onClick={this._showModal}>
          {candidate.metadata.photo_url
          ? <CandidateImage candidate={candidate} />
          : <SvgIcon icon={NoPhoto} width={64} height={75} /> }
        </div>

        <div className={styles['details']}>
          <div className={styles['name']}>
            <a onClick={this._showModal}>
              {candidate.Candidate_Name}
            </a>
          </div>
          <div className={styles['party']}>
            {partyIdToTitle(candidate.Candidate_Party)}
          </div>
        </div>

        <Modal
          containerClassName={styles['modal-container']}
          style={{fontFamily: 'inherit'}}
          closeOnOuterClick
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
