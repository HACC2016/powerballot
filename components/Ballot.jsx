import React, { PropTypes } from 'react'

import Contest from './Contest.jsx'

export default class Ballot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  render () {
    const { ballot } = this.props
    const { contests } = ballot

    return (
      <div>
        <div className="ballot-title">Your Power Ballot</div>
        {contests.map(this._renderContest)}
      </div>
    )
  }
}

Ballot.propTypes = {
  contests: PropTypes.array,
}
