import React, { PropTypes } from 'react'
import CandidateLinks from './CandidateLinks.jsx'

import styles from './candidate-details.scss'

export default class CandidateDetails extends React.Component {

  render () {
    const { candidate } = this.props

    const campaignLinks = [
      { title: 'Campaign Expenditures Visualization' },
      { title: 'Standard Reports'},
      { title: 'Spcial Reports'},
    ]

    const candidateLinks = [
      { title: 'Website', href: 'http://www.google.com' },
      { title: 'Email', href: 'mailto:test@gmail.com' },
      { title: 'Facebook', href: 'http://www.facebook.com' },
      { title: 'LinkedIn'},
      { title: 'Twitter', href: 'http://www.twitter.com' },
    ]

    const otherLinks = [
      { title: 'Official government webpage', href: 'http://www.google.com' },
    ]

    return (
      <div>
        <div className={styles['candidate-name']}>{candidate.Candidate_Name} ({candidate.Candidate_Party})</div>

        <div className={styles['section']}>
          <div className={styles['general']}>
            Seeking Office<br></br>
            Party Affiliations<br></br>
            Occupation<br></br>
          </div>
          <div className={styles['separator-1']}></div>
          <div className={styles['candidate-comittee']}>
            <span className={styles['section-title']}>Candidate Committee</span><br></br>
            Name<br></br>
            Chair<br></br>
            Treasurer<br></br>
          </div>
          <div className={styles['separator-2']}></div>
          <CandidateLinks className={styles['finance-links']} title="Campaign Finance Links" links={campaignLinks} />
          <CandidateLinks className={styles['candidate-links']} title="Candidate Links" links={candidateLinks} />
          <CandidateLinks className={styles['other-links']} title="Other Links" links={otherLinks} />
          <div className={styles['separator-3']}></div>
        </div>
      </div>
    )
  }
}

CandidateDetails.propTypes = {
  candidate: PropTypes.object,
}
