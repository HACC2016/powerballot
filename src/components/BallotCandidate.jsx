import React, { PropTypes } from 'react'

export default class BallotCandidate extends React.Component {
  _renderParty(party) {
    switch (party.toLowerCase()) {
    case 'a':
      return 'American Shopping Party'
    case 'c':
      return 'Constitution Party of Hawaii'
    case 'd':
      return 'Democratic Party of Hawaii'
    case 'g':
      return 'Green Party of Hawaii'
    case 'i':
      return 'Hawaii Independent Party'
    case 'l':
      return 'Libertarian Party of Hawaii'
    case 'r':
      return 'Hawaii Republican Party'
    case 'ns':
      return 'Non-Partisan Special'
    case 'n':
      return 'Non-Partisan'
    default:
      return party
    }
  }

  render () {
    const { candidate } = this.props

    return (
      <div className="ballot-candidate">
        ({this._renderParty(candidate.Candidate_Party)}) {candidate.Candidate_Name}
      </div>
    )
  }
}

BallotCandidate.propTypes = {
  candidate: PropTypes.object,
}
