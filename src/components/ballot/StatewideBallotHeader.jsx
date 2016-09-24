import React from 'react'

import SvgIcon from 'src/components/common/SvgIcon.jsx'

import StatewideIcon from 'src/assets/icon_statewide-12.svg'

import styles from './ballot-header.scss'

export default class StatewideBallotHeader extends React.Component {

  render () {
    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <SvgIcon className={styles['icon']} icon={StatewideIcon} width='77px' height='60px' />

          <div className={styles['title-container']}>
            <span className={styles['title']}>
              Hawaii Statewide Power Ballot
            </span>
            <span className={styles['sub-title']}>
              General Election 2016
            </span>
          </div>
        </div>
        <div className={styles['instructions']}>
          The Statewide Power Ballot lists all the candidates and issues throughout the State of Hawaii for the coming election.
        </div>
      </div>
    )
  }
}

StatewideBallotHeader.propTypes = {
}
