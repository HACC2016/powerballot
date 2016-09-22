import React, { PropTypes } from 'react'

import StatewideBallotHeader from './StatewideBallotHeader'
import Contest from './Contest'

export default class StatewideBallot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  render () {
    const { ballot } = this.props
    if (!ballot) return null
    const { contests } = ballot

    return (
      <div>
        <div className='row'>
          <StatewideBallotHeader />
          {contests.map(this._renderContest)}
        </div>
      </div>
    )
  }
}

StatewideBallot.propTypes = {
  ballot: PropTypes.object,
}
