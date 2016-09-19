import React from 'react'

import styles from './instructions.scss'

export default function Instructions (props) {
  const { } = props

  return (
    <div className={styles['container']}>
      <div className='bold'>What is a Power Ballot?</div>
      <p>
        A “Power Ballot” is a complete list of candidates and issues that will be on the ballot in the coming election. It contains links to candidate bio's, interviews, campaign data, resources and helpful information on proposed ammendments and issues to help educate your vote.
      </p>

      <div className='bold'>Two types:</div>
      <ul>
        <li>
          <b>Your Power Ballot</b> lists just the candidates and issues that pertain to you — information for just the races you'll be voting for. This is based on your address.*
        </li>
        <li>
          <b>Statewide Power Ballot</b> lists all the candidates and issues statewide for the coming election.
        </li>
      </ul>

      <div className={styles['sub-text']}>
        * This is the address you listed when you registered to vote, most likely your home address. If you're unsure of which address is associated with your voter registration and want to check your voter file OR you still need to register to vote visit <a href="https://olvr.hawaii.gov/">https://olvr.hawaii.gov/</a>
      </div>
    </div>
  )
}
