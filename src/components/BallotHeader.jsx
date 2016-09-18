import React, { PropTypes } from 'react'

import SvgIcon from './common/SvgIcon.jsx'
import BallotPrecinct from 'src/components/BallotPrecinct.jsx'

import styles from './ballot-header.scss'

export default class BallotHeader extends React.Component {

  render () {
    const { ballot, precinct } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <SvgIcon className={styles['icon']} icon='yourIcon' width='77px' height='65px' />

          <div className={styles['title-container']}>
            <span className={styles['title']}>
              Your Power Ballot
            </span>
            <span className={styles['sub-title']}>
              General Election 2016
            </span>
          </div>
        </div>
        <div className={styles['contents']}>
          <BallotPrecinct
            address='222 Drive'
            pollingPlace={ballot.pollingPlace}
            precinct={precinct} />
        </div>
      </div>
    )
  }
}

BallotHeader.propTypes = {
  ballot: PropTypes.object,
  precinct: PropTypes.string,
}
