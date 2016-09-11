import React, { PropTypes } from 'react'

import BallotCandidate from './BallotCandidate.jsx'

import styles from './contest.scss'

export default class Contest extends React.Component {
  render () {
    const { candidates, contest } = this.props

    return (
      <div>
        <div className={styles['header']}>
          {contest.Contest_ID}
        </div>
        {candidates.map((c, i) => {
          return (
            <BallotCandidate key={i} candidate={c} />
          )
        })}
      </div>
    )
  }
}

Contest.propTypes = {
  contest: PropTypes.object,
  candidates: PropTypes.array.isRequired,
}
Contest.defaultProps = {
  candidates: [],
}
