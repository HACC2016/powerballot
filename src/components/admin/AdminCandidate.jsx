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

  _updateCandidateField = (fieldName, value) => {
    console.log(fieldName, value)

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
      }
    )
  }

  render () {
    const { candidate } = this.state
    const { metadata } = candidate

    return (
      <div>
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
