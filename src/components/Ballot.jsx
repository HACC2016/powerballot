import React, { PropTypes } from 'react'

import BallotHeader from './BallotHeader'
import Contest from './Contest'

import styles from './ballot.scss'

export default class Ballot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  render () {
    const { ballot, precinct } = this.props
    if (!ballot) return null
    const { contests } = ballot

    return (
      <div>
        <div className='row'>
          <BallotHeader ballot={ballot} precinct={precinct} />
          {contests.map(this._renderContest)}
        </div>
      </div>
    )
  }
}

Ballot.propTypes = {
  ballot: PropTypes.object,
  precinct: PropTypes.string,
}
