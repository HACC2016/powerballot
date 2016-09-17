import React, { PropTypes } from 'react'

import CandidateFormField from 'src/components/CandidateFormField'

export default class CandidateForm extends React.Component {

  _renderField(candidateMetadata, fieldName, index) {
    const { updateCandidateField } = this.props

    return (
      <CandidateFormField
        fieldName={fieldName}
        value={candidateMetadata[fieldName]}
        updateCandidateField={updateCandidateField}
        key={index} />
    )
  }

  render () {
    const { candidateMetadata } = this.props

    return (
      <div>
        {JSON.stringify(candidateMetadata, null, 2)}
        { Object.keys(candidateMetadata).map((fieldName, index) => {
          return this._renderField(candidateMetadata, fieldName, index)
        }) }
      </div>
    )
  }
}

CandidateForm.propTypes = {
  candidateMetadata: PropTypes.object,
}
