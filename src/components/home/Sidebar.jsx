import React, { PropTypes } from 'react'

import styles from './sidebar.scss'

export default function Sidebar() {
  return (
    <div className={styles['container']}>

      <h3 className={styles['header']}>Key Dates</h3>
      <div className={styles['event-title']}>
        Voter Registration Deadline
      </div>
      <p>
        October 10, 2016, 4:30pm
        <br />
        <a href="http://elections.hawaii.gov/">Register now online</a>
      </p>

      <div className={styles['separator']} />

      <div className={styles['event-title']}>
        Early Walk-in Voting/Late Registration
      </div>
      <p>
        October 25 - November 5, 2016
      </p>

      <div className={styles['separator']} />

      <div className={styles['event-title']}>
        Mail-In Ballot Deadline
      </div>
      <p>
        Novermber 1, 2016
      </p>

      <div className={styles['separator']} />

      <div className={styles['event-title']}>
        General Election
      </div>
      <p>
        Novermber 8, 2016
        <br />
        7 am to 6pm
      </p>
    </div>
  )
}
Sidebar.propTypes = {
}
