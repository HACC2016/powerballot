import React, { PropTypes } from 'react'

import CandidateFormField from './CandidateFormField'

import styles from './candidate-form.scss'

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
  'OE_SORT_ID',
  'FTMORG_ID',
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
        <div className={styles['candidate-form']}>
          { Object.keys(candidateMetadata).map((fieldName, index) => {
            if (!ignoredFields.includes(fieldName)) {
              return this._renderField(candidateMetadata, fieldName, index)
            }
          }) }
        </div>

        <div className={styles['save-button']} onClick={saveMetadata}>
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
