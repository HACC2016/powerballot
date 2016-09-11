import React, { PropTypes } from 'react'

import BallotCandidate from './BallotCandidate.jsx'

import styles from './contest.scss'

export default class Contest extends React.Component {
  _renderContestName () {
    const { contest } = this.props

    switch (contest.Contest_ID) {
    case 'USS':
      return 'United States Senate'
    default:
      return contest.Contest_ID
    }
  }

  render () {
    const { contest } = this.props
    const { candidates } = contest

    return (
      <div>
        <div className={styles['header']}>
          {this._renderContestName()}
        </div>
        <div className={styles['candidate-list']}>
          {candidates.map((c, i) => {
            return (
              <BallotCandidate key={i} candidate={c} />
            )
          })}
        </div>
      </div>
    )
  }
}

Contest.propTypes = {
  contest: PropTypes.object,
}
