import React, { PropTypes } from 'react'

export default class Ballot extends React.Component {
  render () {
    const { ballot } = this.props

    return (
      <div>
        {JSON.stringify(ballot, null, 2)}
      </div>
    )
  }
}

Ballot.propTypes = {
  ballot: PropTypes.object,
}
