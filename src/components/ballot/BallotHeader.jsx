import React, { PropTypes } from 'react'

import SvgIcon from 'src/components/common/SvgIcon.jsx'
import BallotPrecinct from './BallotPrecinct.jsx'

import YourIcon from 'src/assets/icon_yourpowerballot-10.svg'

import styles from './ballot-header.scss'

export default class BallotHeader extends React.Component {

  render () {
    const { address, ballot, precinct } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <SvgIcon className={styles['icon']} icon={YourIcon} width='77px' height='65px' />

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
            address={address}
            pollingPlace={ballot.pollingPlace}
            precinct={precinct} />
        </div>
      </div>
    )
  }
}

BallotHeader.propTypes = {
  address: PropTypes.string,
  ballot: PropTypes.object,
  precinct: PropTypes.string,
}
