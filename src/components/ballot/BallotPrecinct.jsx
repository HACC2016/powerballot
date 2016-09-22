import React, { PropTypes } from 'react'

import BallotPollingPlace from './BallotPollingPlace.jsx'

import styles from './ballot-precinct.scss'

export default class BallotPrecinct extends React.Component {

  render () {
    const { address, pollingPlace, precinct } = this.props
    const addressInfo = (
      <div>
        <div className={styles['header']}>Your Address</div>
        <div>{address}</div>
      </div>
    )

    return (
      <div className={styles['container']}>
        <div>
          {address ? addressInfo : null}
          <div>
            <div className={styles['header']}>Your Precinct</div>
            <div>{precinct}</div>
          </div>
        </div>
        <div>
          <div className={styles['header']}>Your Polling Place</div>
          <BallotPollingPlace pollingPlace={pollingPlace} />
        </div>
      </div>
    )
  }
}

BallotPrecinct.propTypes = {
  address: PropTypes.string,
  pollingPlace: PropTypes.object,
  precinct: PropTypes.string,
}
