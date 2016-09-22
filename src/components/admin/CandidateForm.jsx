import React, { PropTypes } from 'react'

import CandidateFormField from './CandidateFormField'

const ignoredFields = [
  'id',
  'Candidate_ID',
  'created_at',
  'updated_at',
  'incumbent_text',
  'Office',
  'Party',
  'District',
  'name_party',
  'party_text',
  'photo_width',
  'office_district',
]

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
    const { candidateMetadata, saveMetadata } = this.props

    return (
      <div>
        { Object.keys(candidateMetadata).map((fieldName, index) => {
          if (!ignoredFields.includes(fieldName)) {
            return this._renderField(candidateMetadata, fieldName, index)
          }
        }) }

        <div onClick={saveMetadata}>
            Save
        </div>

      </div>
    )
  }
}

CandidateForm.propTypes = {
  candidateMetadata: PropTypes.object,
  updateCandidateField: PropTypes.func.isRequired,
  saveMetadata: PropTypes.func.isRequired,
}
