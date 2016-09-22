import React, { PropTypes } from 'react'

import BallotHeader from './BallotHeader'
import Contest from './Contest'
import Amendment from './Amendment'

export default class Ballot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  _renderAmendment (amendmentGroup) {
    return (
      <Amendment key={amendmentGroup.id} amendmentGroup={amendmentGroup} />
    )
  }

  render () {
    const { address, ballot, coordinates, precinct } = this.props
    if (!ballot) return null
    const { contests, amendments } = ballot

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
          {amendments.map(this._renderAmendment)}
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
