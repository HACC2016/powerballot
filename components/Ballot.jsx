import React, { PropTypes } from 'react'

import SvgIcon from './common/SvgIcon.jsx'
import Contest from './Contest.jsx'

import styles from './ballot.scss'

export default class Ballot extends React.Component {

  _renderContest (contest) {
    return (
      <Contest key={contest.Contest_ID} contest={contest} />
    )
  }

  render () {
    const { ballot } = this.props
    const { contests } = ballot

    return (
      <div className='row'>
        <div className={styles['header']}>
          <SvgIcon icon='yourIcon' />
          Your Power Ballot
        </div>
        {contests.map(this._renderContest)}
      </div>
    )
  }
}

Ballot.propTypes = {
  ballot: PropTypes.object,
}
