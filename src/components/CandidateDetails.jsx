import React, { PropTypes } from 'react'
import CandidateLinks from './CandidateLinks.jsx'

import styles from './candidate-details.scss'

export default class CandidateDetails extends React.Component {

  render () {
    const { candidate } = this.props

    const campaignLinks = [
      'expenditure_viz_url',
      'csc_standard_url',
      'csc_special_url',
    ]

    const candidateLinks = [
      'cand_website_url',
      'cand_email',
      'cand_facebook_url',
      'cand_linked',
      'cand_twitter_url',
    ]

    const otherLinks = [
      'gov_website_url',
      'lwv_website_url',
      'ftm_website_url',
      'pvs_website_url',
      'bp_website_url',
      'wp_website_url',
      'cb_website_url',
      'pbs_hawaii_url',
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
            <CandidateLinks className={styles['column']} title="Campaign Finance Links" candidate={candidate} links={campaignLinks} />
          </div>

          <div className={styles['separator']}></div>

          <div className={styles['section']}>
            <CandidateLinks className={styles['column']} title="Candidate Links" candidate={candidate} links={candidateLinks} />
            <CandidateLinks className={styles['column']} title="Other Links" candidate={candidate} links={otherLinks} />
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
