import React, {PropTypes} from 'react';

import PrecinctList from './PrecinctList.jsx'

export default class Home extends React.Component {
  render () {
    const { precincts } = this.props

    return (
      <div>
        <h1>Welcome to the Powerballot 2016 Home Page</h1>
        <PrecinctList precincts={precincts} />
      </div>
    )
  }
}

Home.propTypes = {
  precints: PropTypes.string
}
