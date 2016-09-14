import React, { PropTypes } from 'react'
import CandidateLinks from './CandidateLinks.jsx'

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
      { title: 'Email', href: 'test@gmail.com' },
      { title: 'Facebook', href: 'http://www.facebook.com' },
      { title: 'LinkedIn'},
      { title: 'Twitter', href: 'http://www.twitter.com' },
    ]

    const oherLinks = [
      { title: 'Official government webpage', href: 'http://www.google.com' },
    ]

    return (
      <div>
        {candidate.Candidate_Name} ({candidate.Candidate_Party})

        <div>
          Seeking Office<br></br>
          Party Affiliations<br></br>
          Occupation<br></br>
        </div>
        <div>
          Candidate Committee<br></br>
          <CandidateLinks title="Campaign Finance Links" links={campaignLinks} />
        </div>
          <CandidateLinks title="Candidate Links" links={candidateLinks} />
          <CandidateLinks title="Other Links" links={oherLinks} />
        <div>

        </div>
      </div>
    )
  }
}

CandidateDetails.propTypes = {
  candidate: PropTypes.object,
}
