import React, { PropTypes } from 'react'

import BallotHeader from './BallotHeader'
import Contest from './Contest'

export default class Ballot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  render () {
    const { address, ballot, coordinates, precinct } = this.props
    if (!ballot) return null
    const { contests } = ballot

    return (
      <div>
        <div className='row'>
          <BallotHeader
            address={address}
            ballot={ballot}
            coordinates={coordinates}
            precinct={precinct}
          />
          {contests.map(this._renderContest)}
        </div>
      </div>
    )
  }
}

Ballot.propTypes = {
  address: PropTypes.string,
  ballot: PropTypes.object,
  coordinates: PropTypes.object,
  precinct: PropTypes.string,
}
