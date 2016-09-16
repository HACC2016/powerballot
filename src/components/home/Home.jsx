import React, {PropTypes} from 'react'

import FindYourBallot from './FindYourBallot'

export default class Home extends React.Component {

  render () {
    const {} = this.props

    return (
      <div>
        <h1>Welcome to the Powerballot 2016 Home Page</h1>
        <FindYourBallot />
      </div>
    )
  }
}

Home.propTypes = {
}
