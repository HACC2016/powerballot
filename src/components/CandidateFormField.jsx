import React, { PropTypes } from 'react'

import { metadataFieldNameToTitle } from 'src/services/candidate_utils'

export default class CandidateFormField extends React.Component {

  _updateField = (e) => {
    const { fieldName, updateCandidateField } = this.props
    updateCandidateField(fieldName, e.target.value)
  }

  render () {
    const { fieldName, value} = this.props

    return (
      <div>
        <span>{metadataFieldNameToTitle(fieldName)}</span>
          <input
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
}
