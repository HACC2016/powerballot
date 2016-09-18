import React, { PropTypes } from 'react'

import CandidateDetailsLink from 'src/components/CandidateDetailsLink.jsx'
import CandidateDetailsLinks from 'src/components/CandidateDetailsLinks.jsx'
import { getContestTitle } from 'src/services/contest_utils.js'
import { partyIdToTitle } from 'src/services/candidate_utils.js'

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
        <div className={styles['candidate-name']}>
          {candidate.Candidate_Name} ({candidate.Candidate_Party})
          <span> {candidate.metadata.incumbent_text}</span>
        </div>

        <div className={styles['content']}>
          <div>
            <div>Seeking Office: {getContestTitle(candidate.Contest_ID)}</div>
            <div>Party Affiliations: {partyIdToTitle(candidate.Candidate_Party)}</div>
            <div>Occupation: {candidate.metadata.occupation}</div>
          </div>

          <div className={styles['separator']}></div>

          <div className={styles['section']}>
            <div className={styles['column']}>
              <div className={styles['section-title']}>
                Candidate Committee
              </div>
              <div>Name: {candidate.metadata.cc_name}</div>
              <div>Chair: {candidate.metadata.cc_chair}</div>
              <div>Treasurer: {candidate.metadata.cc_treasurer}</div>
              <CandidateDetailsLink candidate={candidate} fieldName='cc_report_url' />
            </div>
            <CandidateDetailsLinks className={styles['column']} title="Campaign Finance Links" candidate={candidate} links={campaignLinks} />
          </div>

          <div className={styles['separator']}></div>

          <div className={styles['section']}>
            <CandidateDetailsLinks className={styles['column']} title="Candidate Links" candidate={candidate} links={candidateLinks} />
            <CandidateDetailsLinks className={styles['column']} title="Other Links" candidate={candidate} links={otherLinks} />
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
