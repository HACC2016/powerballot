import React from 'react'

import AdminCandidate from 'src/components/admin/AdminCandidate'

export default class AdminCandidatePage extends React.Component {
  componentDidUpdate () {
    // TODO: In here or on route change we should check if we need to fetch the ballot
  }

  render () {
    const { } = this.props

    return (
      <AdminCandidate
        candidate={window.__INITIAL_STATE__.candidate}
      />
    )
  }
}

AdminCandidatePage.propTypes = {
}
