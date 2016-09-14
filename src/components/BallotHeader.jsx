import React, { PropTypes } from 'react'

import SvgIcon from './common/SvgIcon.jsx'

import styles from './ballot-header.scss'

export default class BallotHeader extends React.Component {
  render () {
    const { } = this.props

    return (
      <div className={styles['container']}>
        <div className={styles['container-background']} />
        <div className={styles['contents']}>
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
      </div>
    )
  }
}

BallotHeader.propTypes = {
}
