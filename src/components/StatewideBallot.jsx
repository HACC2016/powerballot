import React, { PropTypes } from 'react'

import Header from './global/Header'
import StatewideBallotHeader from 'src/components/StatewideBallotHeader'
import Contest from 'src/components/Contest'

import styles from './ballot.scss'

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
        <Header />
        <div className='row'>
          <StatewideBallotHeader/>
          {contests.map(this._renderContest)}
        </div>
      </div>
    )
  }
}

StatewideBallot.propTypes = {
  ballot: PropTypes.object,
}
