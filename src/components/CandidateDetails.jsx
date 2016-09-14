import React, { PropTypes } from 'react'

export default class CandidateDetails extends React.Component {

  render () {
    const { candidate } = this.props

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
          Campaign Finance Links<br></br>
        </div>
          Candidate Links<br></br>
          Other Links<br></br>
        <div>

        </div>
      </div>
    )
  }
}

CandidateDetails.propTypes = {
  candidate: PropTypes.object,
}
