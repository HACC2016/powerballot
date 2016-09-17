import React, { PropTypes } from 'react'
import CandidateDetails from 'src/components/CandidateDetails'
import CandidateForm from 'src/components/CandidateForm'

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

  render () {
    const { candidate } = this.state
    const { metadata } = candidate

    return (
      <div>
        <CandidateDetails candidate={candidate} />
        <CandidateForm candidateMetadata={metadata} updateCandidateField={this._updateCandidateField}/>
      </div>
    )
  }
}

AdminCandidate.propTypes = {
  candidate: PropTypes.object,
}
