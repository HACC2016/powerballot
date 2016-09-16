import React, { PropTypes } from 'react'

import Ballot from 'src/components/Ballot'

export default class BallotPage extends React.Component {
  componentDidUpdate () {
    // TODO: In here or on route change we should check if we need to fetch the ballot
  }

  render () {
    const { } = this.props

    return (
      <Ballot
        ballot={window.__INITIAL_STATE__.ballot}
        precinct={window.__INITIAL_STATE__.precinct}
      />
    )
  }
}

BallotPage.propTypes = {
}
