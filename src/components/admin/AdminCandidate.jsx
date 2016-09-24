import React, { PropTypes } from 'react'
import CandidateDetails from 'src/components/ballot/CandidateDetails'
import CandidateForm from './CandidateForm'

import { updateCandidateMetadata } from 'src/services/candidate_utils'

import styles from './admin-candidate.scss'

export default class AdminCandidate extends React.Component {

  state = {
    candidate: {},
  }

  componentWillMount() {
    const { candidate } = this.props
    this.setState({candidate})
  }

  _showPreviousCandidate = () => {
    this._showCandidate(this.props.candidate.id - 1)
  }

  _showNextCandidate = () => {
    this._showCandidate(this.props.candidate.id + 1)
  }

  _showCandidate (id) {
    window.location = `/admin/candidate/id/${id}`
  }

  _updateCandidateField = (fieldName, value) => {
    const { candidate } = this.state
    let newCandidate = { ...candidate }
    newCandidate.metadata[fieldName] = value
    this.setState({candidate: newCandidate})
  }

  _saveMetadata = () => {
    const { candidate } = this.state

    updateCandidateMetadata(candidate.Candidate_ID, candidate.metadata).then(
      updatedMetadata => {
        console.log(updatedMetadata)
        alert('Data saved!')
      },
      failure => {
        console.error('Unable to update', failure)
        alert('error white udating')
      }
    )
  }

  render () {
    const { candidate } = this.state
    const { metadata } = candidate

    return (
      <div className='row'>
        <div className={styles['navigation']}>
          <a onClick={this._showPreviousCandidate}>Previous</a>
          |
          <a onClick={this._showNextCandidate}>Next</a>
        </div>
        <div className={styles['candidate-details-container']}>
          <CandidateDetails candidate={candidate} />
        </div>
        <CandidateForm
          candidateMetadata={metadata}
          updateCandidateField={this._updateCandidateField}
          saveMetadata={this._saveMetadata}
        />
      </div>
    )
  }
}

AdminCandidate.propTypes = {
  candidate: PropTypes.object,
}
