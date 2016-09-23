import React, { PropTypes } from 'react'

import { getContestTitle } from 'src/services/contest_utils.js'
import { partyIdToTitle } from 'src/services/candidate_utils.js'
import { authenticated } from 'src/services/authentication_utils'

import CandidateDetailsLink from './CandidateDetailsLink.jsx'
import CandidateDetailsLinks from './CandidateDetailsLinks.jsx'
import Fact from './Fact'

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
      <div className={styles['container']}>
        <div className={styles['candidate-name-container']}>
          <span className={styles['candidate-name']}>
            {candidate.Candidate_Name} ({candidate.Candidate_Party})
          </span>
          <span className={styles['incumbent-text']}>
            {candidate.metadata.incumbent_text}
          </span>
        </div>
        {authenticated()
        ? <div className={styles['edit-link']}><a href={`/candidate/${candidate.Candidate_ID}`}>Edit</a></div>
        : null}

        <div className={styles['content']}>
          {candidate.metadata.photo_url
          ? <div className={styles['photo-container']}>
            <img src={candidate.metadata.photo_url} />
          </div>
          : null}
          <div>
            <div>
              <Fact label='Seeking Office' value={getContestTitle(candidate.Contest_ID)} />
              <Fact label='Party Affiliations' value={partyIdToTitle(candidate.Candidate_Party)} />
              <Fact label='Occupation' value={candidate.metadata.occupation} />
            </div>

            <div className={styles['separator']} />

            <div className={styles['section']}>
              <div className={styles['column']}>
                <div className={styles['section-title']}>
                  Candidate Committee
                </div>
                <Fact label='Name' value={candidate.metadata.cc_name} />
                <Fact label='Chair' value={candidate.metadata.cc_chair} />
                <Fact label='Treasurer' value={candidate.metadata.cc_treasurer} />
                <CandidateDetailsLink candidate={candidate} fieldName='cc_report_url' />
              </div>
              <CandidateDetailsLinks className={styles['column']} title="Campaign Finance Links" candidate={candidate} links={campaignLinks} />
            </div>

            <div className={styles['separator']} />

            <div className={styles['section']}>
              <CandidateDetailsLinks className={styles['column']} title="Candidate Links" candidate={candidate} links={candidateLinks} />
              <CandidateDetailsLinks className={styles['column']} title="Other Links" candidate={candidate} links={otherLinks} />
            </div>

            <div className={styles['separator']} />
            <div>
              See a mistake? Have a suggestion?
              &nbsp;<a className={styles['let-us-know']} href='mailto:hawaiipowerballot@gmail.com'>Let us know</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CandidateDetails.propTypes = {
  candidate: PropTypes.object,
}
