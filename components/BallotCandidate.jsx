import React, { PropTypes } from 'react'

export default class BallotCandidate extends React.Component {
  _renderParty(party) {
    switch(party.toLowerCase()) {
      case 'republican':
        return 'R'
      case 'democrat':
        return 'D'
      case 'libertarian':
        return 'L'
      defaut:
        return party
    }
  }

  render () {
    const { candidate } = this.props

    return (
      <div className="ballot-candidate">
        ({this._renderParty(candidate.party)}) {candidate.name}
      </div>
    )
  }
}

BallotCandidate.propTypes = {
  candidate: PropTypes.object,
}