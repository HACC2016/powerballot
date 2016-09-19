import React, { PropTypes } from 'react'

import styles from './sidebar.scss'

export default function Sidebar() {
  var t = Date.parse('2016-11-08') - Date.parse(new Date())
  var daysTillGeneralElection = Math.floor( t/(1000*60*60*24) )

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

      <div className={styles['general-election']}>
        <div>
          <div className={styles['event-title']}>
            General Election
          </div>
          <p>
            November 8, 2016
            <br />
            7 am to 6pm
          </p>
        </div>
        <div className={styles['countdown-container']}>
          COUNTDOWN
          <div className={styles['countdown']}>{daysTillGeneralElection} DAYS</div>
        </div>
      </div>
    </div>
  )
}
Sidebar.propTypes = {
}
