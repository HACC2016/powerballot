import React, { PropTypes } from 'react'
import CandidateDetails from 'src/components/CandidateDetails'
import CandidateForm from 'src/components/CandidateForm'

import { updateCandidateMetadata } from 'src/services/candidate_utils'

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
        <CandidateDetails candidate={candidate} />
        <CandidateForm
          candidateMetadata={metadata}
          updateCandidateField={this._updateCandidateField}
          saveMetadata={this._saveMetadata}/>
      </div>
    )
  }
}

AdminCandidate.propTypes = {
  candidate: PropTypes.object,
}
