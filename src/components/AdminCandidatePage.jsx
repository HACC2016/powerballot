import React, { PropTypes } from 'react'

import CandidateDetails from 'src/components/CandidateDetails'

export default class AdminCandidatePage extends React.Component {
  componentDidUpdate () {
    // TODO: In here or on route change we should check if we need to fetch the ballot
  }

  render () {
    const { } = this.props

    return (
      <CandidateDetails
        candidate={window.__INITIAL_STATE__.candidate}
      />
    )
  }
}

AdminCandidatePage.propTypes = {
}
