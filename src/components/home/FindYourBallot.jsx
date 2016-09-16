import React, { PropTypes } from 'react'

import styles from './find-your-ballot.scss'

export default class FindYourBallot extends React.Component {
  state = {
    address: '',
  }

  _updateAddress = (e) => {
    this.setState({address: e.target.value})
  }

  render () {
    const { } = this.props
    const { address } = this.state

    return (
      <div className={styles['container']}>
        FindYourBallot gg
        <div className={styles['input-container']}>
          <input
            className={styles['input']}
            type='text'
            placeholder="Type your address here to get YOUR Power Ballot"
            onChange={this._updateAddress}
            value={address}
          />
          <div className={styles['go-button']}>
            GO
          </div>
        </div>
      </div>
    )
  }
}

FindYourBallot.propTypes = {
}
