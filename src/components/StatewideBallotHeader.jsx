import React, { PropTypes } from 'react'

import SvgIcon from './common/SvgIcon.jsx'

import styles from './ballot-header.scss'

export default class StatewideBallotHeader extends React.Component {

  render () {
    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <SvgIcon className={styles['icon']} icon='stateIcon' width='77px' height='65px' />

          <div className={styles['title-container']}>
            <span className={styles['title']}>
              Hawaii Statewide Power Ballot
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

StatewideBallotHeader.propTypes = {
}
