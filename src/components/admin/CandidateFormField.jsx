import React, { PropTypes } from 'react'

import { metadataFieldNameToTitle } from 'src/services/candidate_utils'

import styles from './candidate-form-field.scss'

export default class CandidateFormField extends React.Component {

  _updateField = (e) => {
    const { fieldName, updateCandidateField } = this.props
    updateCandidateField(fieldName, e.target.value)
  }

  render () {
    const { fieldName, value} = this.props

    return (
      <div className={styles['row']}>
        <span className={styles['label']}>
          {metadataFieldNameToTitle(fieldName)}
        </span>
        <input
          className={styles['field']}
          type='text'
          onChange={this._updateField}
          value={value || ''}
        />
      </div>
    )
  }
}

CandidateFormField.propTypes = {
  fieldName: PropTypes.string,
  updateCandidateField: PropTypes.func.isRequired,
  value: PropTypes.string,
}
