import React, { PropTypes } from 'react'

import BallotCandidate from './BallotCandidate.jsx'

export default class Ballot extends React.Component {
  render () {
    const { ballot, candidates } = this.props

    return (
      <div>
        <div className="ballot-title">{ballot.title}</div>
        {candidates.map((c, i) => {
          return (
            <BallotCandidate key={i} candidate={c} />
          )
        })}
      </div>
    )
  }
}

Ballot.propTypes = {
  ballot: PropTypes.object,
}
