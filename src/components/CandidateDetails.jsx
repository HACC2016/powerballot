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

        <div className={styles['content']}>
          <div>
            <div>Seeking Office</div>
            <div>Party Affiliations</div>
            <div>Occupation</div>
          </div>

          <div className={styles['separator']}></div>

          <div className={styles['section']}>
            <div className={styles['column']}>
              <div className={styles['section-title']}>
                Candidate Committee
              </div>
              <div>Name</div>
              <div>Chair</div>
              <div>Treasurer</div>
            </div>
            <CandidateLinks className={styles['column']} title="Campaign Finance Links" links={campaignLinks} />
          </div>

          <div className={styles['separator']}></div>

          <div className={styles['section']}>
            <CandidateLinks className={styles['column']} title="Candidate Links" links={candidateLinks} />
            <CandidateLinks className={styles['column']} title="Other Links" links={otherLinks} />
          </div>

          <div className={styles['separator']}></div>
        </div>
      </div>
    )
  }
}

CandidateDetails.propTypes = {
  candidate: PropTypes.object,
}
