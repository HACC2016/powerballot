import React, { PropTypes } from 'react'

export default class PrecinctList extends React.Component {
  render () {
    const { precincts } = this.props

    return (
      <div>
        Precincts
        {precincts}
      </div>
    )
  }
}

PrecinctList.propTypes = {
  precints: PropTypes.string
}
