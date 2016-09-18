import React, { PropTypes } from 'react'

import BallotPollingPlace from 'src/components/BallotPollingPlace.jsx'

export default class BallotPrecinct extends React.Component {

  render () {
    const { address, pollingPlace, precinct } = this.props

    return (
      <div>
        <div>
          Your Address: {address}
        </div>
        <div>
          Your Precinct: {precinct}
        </div>
        <div>
          Your Polling Place: <BallotPollingPlace pollingPlace={pollingPlace} />
        </div>
      </div>
    )
  }
}

BallotPrecinct.propTypes = {
  address: PropTypes.string,
  pollingPlace: PropTypes.object,
  precinct: PropTypes.string,
}
