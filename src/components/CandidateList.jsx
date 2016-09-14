import React, { PropTypes } from 'react'

export default class CandidateList extends React.Component {
  render () {
    const { candidates } = this.props

    return (
      <div>
        <h2>CandidateList</h2>
        {candidates.map((c, i) => {
          return (
            <div key={i}>
              {JSON.stringify(c)}
            </div>
          )
        })}
      </div>
    )
  }
}

CandidateList.propTypes = {
  candidates: PropTypes.array,
}
