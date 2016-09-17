import React, { PropTypes } from 'react'

export default class CandidateFormField extends React.Component {

  _updateField = (e) => {
    const { fieldName, updateCandidateField } = this.props
    updateCandidateField(fieldName, e.target.value)
  }

  render () {
    const { fieldName, value} = this.props

    return (
      <div>
        <span>{fieldName}</span>
          <input
            type='text'
            placeholder="Hello"
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
