import React, {PropTypes} from 'react';

import CandidateList from './CandidateList.jsx'
import PrecinctList from './PrecinctList.jsx'

export default class Home extends React.Component {
  render () {
    const { candidates, precincts } = this.props

    return (
      <div>
        <h1>Welcome to the Powerballot 2016 Home Page</h1>
        <PrecinctList precincts={precincts} />
        <CandidateList candidates={candidates} />
      </div>
    )
  }
}

Home.propTypes = {
  candidates: PropTypes.array,
  precincts: PropTypes.array,
}
